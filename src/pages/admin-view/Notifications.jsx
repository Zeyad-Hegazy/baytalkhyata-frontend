import { useEffect, useState } from "react";
import { Form, Button, Col, Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../api/admin/students";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import PerfectScrollbar from "react-perfect-scrollbar";
import Conversation from "../../components/chat/Conversation";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Notifications = () => {
	const students = useSelector((state) => state.students);
	const [selectedStudent, setSelectedStudent] = useState(null);
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getStudents();
			dispatch({ type: "GET_STUDENTS", payload: response.data.result });
		};
		fetchData();
	}, [dispatch]);

	const handleSendNotification = async (e) => {
		e.preventDefault();
		try {
			console.log({ userId: selectedStudent?._id, title, message });
		} catch (error) {
			console.error("Error sending notification:", error);
		}
	};

	return (
		<div>
			<Pageheader
				title="Notifications"
				heading="Main Menu"
				active="Notifications"
			/>

			<Row>
				<Col xl={3} lg={12}>
					<Card>
						<div className="main-content-app">
							<div className="main-content-left main-content-left-chat overflow-hidden">
								<div className="main-chat-list" id="ChatList">
									<PerfectScrollbar style={{ maxHeight: "800px" }}>
										{students.length > 0 &&
											students.map((s) => (
												<div key={s._id} onClick={() => setSelectedStudent(s)}>
													<Conversation selected={false} user={s} />
												</div>
											))}
									</PerfectScrollbar>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={9} lg={12}>
					{selectedStudent ? (
						<Card>
							<Card.Body>
								<Form onSubmit={handleSendNotification}>
									<h4>
										Send to{" "}
										<span className="text-primary">
											{selectedStudent.fullName}
										</span>
									</h4>

									<Form.Group controlId="formTitle">
										<Form.Label>Title</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter notification title"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
										/>
									</Form.Group>
									<Form.Group controlId="formMessage">
										<Form.Label>Message</Form.Label>
										<ReactQuill
											value={message}
											onChange={setMessage}
											placeholder="Write notification message"
											modules={{
												toolbar: [
													[{ header: "1" }, { header: "2" }, { font: [] }],
													[{ list: "ordered" }, { list: "bullet" }],
													["bold", "italic", "underline"],
													["link", "image"],
													[{ align: [] }],
													["clean"],
												],
											}}
											formats={[
												"header",
												"font",
												"size",
												"bold",
												"italic",
												"underline",
												"list",
												"bullet",
												"link",
												"image",
												"align",
											]}
										/>
									</Form.Group>
									<Button variant="primary" type="submit" className="mt-3">
										Send Notification
									</Button>
								</Form>
							</Card.Body>
						</Card>
					) : (
						<Card>
							<Card.Body>
								<p>Select student to send notification</p>
							</Card.Body>
						</Card>
					)}
				</Col>
			</Row>
		</div>
	);
};

export default Notifications;
