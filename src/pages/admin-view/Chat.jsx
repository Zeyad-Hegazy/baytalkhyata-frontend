import { Fragment, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagesData } from "../../common/commonimages";
import Pageheader from "../../layout/layoutcomponent/pageheader";

import Conversation from "../../components/chat/Conversation";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../api/admin/students";
import ChatBox from "../../components/chat/ChatBox";

import { createConversation } from "../../api/admin/conversations";

const Chat = () => {
	const students = useSelector((state) => state.students);
	const conversation = useSelector((state) => state.conversation?.conversation);
	const admin = useSelector((state) => state.auth.profile);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getStudents();
			dispatch({ type: "GET_STUDENTS", payload: response.data.result });
		};
		fetchData();
	}, [dispatch]);

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
											<PerfectScrollbar style={{ height: "800px" }}>
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
						{/* Contact Details */}
						{/* <Col lg={12} xl={3}>
							<Card className="overflow-hidden">
								<div className="main-content-app slid1">
									<Card.Body className=" p-0 chat-main">
										<div className="float-end ms-auto m-4">
											<Dropdown className="dropdown show main-contact-star">
												<Dropdown.Toggle
													className="new option-dots"
													variant=""
													href="#"
												>
													<i className="fe fe-more-vertical  tx-18"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu
													style={{ margin: "0px" }}
													className="dropdown-menu shadow"
												>
													<Dropdown.Item className="dropdown-item" href="#">
														Edit
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item" href="#">
														Delete
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item" href="#">
														Settings
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<div className="text-center border-bottom chat-image p-4 pb-0 mb-4 br-5 mt-3">
											<div className="main-img-user avatar-xl main-avatar online mb-3 mx-auto">
												<Link to={`${import.meta.env.BASE_URL}pages/profile/`}>
													<img
														alt="avatar"
														className="rounded-circle"
														src={imagesData("female2")}
													/>
												</Link>
											</div>
											<Link to={`${import.meta.env.BASE_URL}pages/profile/`}>
												<h5 className="mb-1">Ryan Gracie</h5>
											</Link>
											<p className="text-muted mt-0 mb-1 pt-0 tx-13">
												Senior Web Designer
											</p>
											<p className="text-muted mt-0 pt-0 tx-13 mb-0">
												+123(45)-678-90
											</p>
										</div>
										<div>
											<PerfectScrollbar style={{ height: "400px" }}>
												<div className="px-4">
													<h6 className="mb-3">Contact Details :</h6>
													<div className="d-flex">
														<div>
															<Link
																className="nav-link border rounded-pill chat-profile me-2"
																to="#"
															>
																<i className="fe fe-shield"></i>
															</Link>
														</div>
														<div className="ms-2">
															<p className="tx-13 font-weight-semibold mb-0">
																Id
															</p>
															<p className="tx-12 text-muted">2E345D4.</p>
														</div>
													</div>
													<div className="d-flex">
														<div>
															<Link
																className="nav-link border rounded-pill chat-profile me-2"
																to="#"
															>
																<i className="fe fe-mail"></i>
															</Link>
														</div>
														<div className="ms-2">
															<p className="tx-13 font-weight-semibold mb-0">
																Email
															</p>
															<p className="tx-12 text-muted">
																gracie435@gmail.com.
															</p>
														</div>
													</div>
													<div className="d-flex mt-2">
														<div>
															<Link
																className="nav-link border rounded-pill chat-profile me-2"
																to="#"
															>
																<i className="fe fe-map-pin"></i>
															</Link>
														</div>
														<div className="ms-2">
															<p className="tx-13 font-weight-semibold mb-0">
																Address
															</p>
															<p className="tx-12 text-muted">
																2nd street,houston texas,united states.
															</p>
														</div>
													</div>
												</div>
											</PerfectScrollbar>
										</div>
									</Card.Body>
								</div>
							</Card>
						</Col> */}
					</Row>
				</Col>
			</Row>
		</Fragment>
	);
};

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
