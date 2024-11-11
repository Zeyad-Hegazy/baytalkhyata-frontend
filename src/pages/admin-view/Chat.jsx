import { Fragment, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { imagesData } from "../../common/commonimages";
import Pageheader from "../../layout/layoutcomponent/pageheader";

import Conversation from "../../components/chat/Conversation";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../api/admin/students";
import ChatBox from "../../components/chat/ChatBox";

import {
	createConversation,
	getConversation,
} from "../../api/admin/conversations";

const Chat = () => {
	const { senderId } = useParams();
	const students = useSelector((state) => state.students);
	const conversation = useSelector((state) => state.conversation?.conversation);
	console.log(conversation);
	const admin = useSelector((state) => state.auth.profile);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getStudents();
			dispatch({ type: "GET_STUDENTS", payload: response.data.result });
		};
		fetchData();
		if (senderId) {
			const fetchConversation = async () => {
				console.log("student", senderId);
				const response = await getConversation(admin._id, senderId);
				dispatch({ type: "ADD_CONVERSATION", payload: response.data.result });
			};
			fetchConversation();
		}
	}, [dispatch, admin, senderId]);

	const createConversationHandler = async (studentId) => {
		const response = await createConversation({
			admin: admin._id,
			student: studentId,
		});
		dispatch({ type: "ADD_CONVERSATION", payload: response.data.result });
	};

	return (
		<Fragment>
			<Pageheader title="CHAT" heading="Main Menu" active="Chat" />

			<Row className=" row-sm mb-4">
				<Col xl={12}>
					<Row>
						<Col xl={3} lg={12}>
							<Card>
								<div className="main-content-app">
									<div className="main-content-left main-content-left-chat overflow-hidden">
										<div className="main-chat-list" id="ChatList">
											{/* Conversations */}
											<PerfectScrollbar style={{ maxHeight: "800px" }}>
												{students.length > 0 &&
													students.map((s) => (
														<div
															key={s._id}
															onClick={() => createConversationHandler(s._id)}
														>
															<Conversation selected={false} user={s} />
														</div>
													))}
											</PerfectScrollbar>
										</div>
									</div>
								</div>
							</Card>
						</Col>
						<Col lg={12} xl={9}>
							<Card>
								{conversation ? (
									<ChatBox conversation={conversation} />
								) : (
									<Card.Body>
										<p>Select student to start conversation</p>
									</Card.Body>
								)}
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</Fragment>
	);
};

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
