import { format, isSameDay, subDays } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import { imagesData } from "../../common/commonimages";
import Message from "./Message";
import { Link } from "react-router-dom";
import { createMessage, getMessages } from "./../../api/admin/messages";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const ChatBox = ({ conversation }) => {
	const admin = useSelector((state) => state.auth.profile);
	const student = useSelector((state) =>
		state.students.find((s) => s._id === conversation?.members?.student)
	);
	const messages = useSelector((state) => state.messages);

	const [messageText, setMessageText] = useState("");

	const scrollbarRef = useRef(null);

	const dispatch = useDispatch();

	useEffect(() => {
		socket.emit("join", admin._id);
		socket.emit("join", student._id);

		socket.on("message", (data) => {
			console.log("New message received:", data);
			dispatch({ type: "GET_MESSAGES", payload: data });
		});

		return () => {
			socket.off("message");
		};
	}, [dispatch, admin._id, student._id]);

	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const response = await getMessages(student._id);
				dispatch({ type: "GET_MESSAGES", payload: response.data.result });
			} catch (error) {
				console.log(error);
			}
		};
		fetchMessages();
	}, [dispatch, student._id]);

	const sendMessage = async () => {
		try {
			const response = await createMessage({
				sender: admin._id,
				reciver: student._id,
				text: messageText,
			});

			socket.emit("message", response.data.result);
			dispatch({ type: "ADD_MESSAGE", payload: response.data.result });

			setMessageText("");
		} catch (error) {
			console.log(error);
		}
	};

	const formatDateLabel = (date) => {
		const today = new Date();
		if (isSameDay(date, today)) return "Today";
		if (isSameDay(date, subDays(today, 1))) return "Yesterday";
		return format(date, "MMMM dd, yyyy");
	};

	useEffect(() => {
		if (scrollbarRef.current) {
			scrollbarRef.current.scrollTop = scrollbarRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div className="main-content-app">
			<Link className="main-header-arrow" to="#" id="ChatBodyHide">
				<i className="icon ion-md-arrow-back"></i>
			</Link>
			<div className="main-content-body main-content-body-chat">
				<div className="main-chat-header">
					{/* Recever Data header in Chat */}
					<div className="main-img-user">
						<img alt="" src={imagesData("female9")} />
					</div>
					<div className="main-chat-msg-name">
						<h6>{student.fullName}</h6>
						<small>Last seen: {student.lastSeen}</small>
					</div>
				</div>
				<div className="main-chat-body" id="ChatBody">
					<PerfectScrollbar
						containerRef={(ref) => (scrollbarRef.current = ref)}
						style={{ maxHeight: "800px" }}
					>
						<div className="content-inner">
							{messages &&
								messages.length > 0 &&
								messages.map((m, index) => {
									const messageDate = new Date(m.createdAt);
									const showDateLabel =
										index === 0 ||
										!isSameDay(
											new Date(messages[index - 1].createdAt),
											messageDate
										);
									return (
										<div key={m._id}>
											{showDateLabel && (
												<label className="main-chat-time">
													<span>{formatDateLabel(messageDate)}</span>
												</label>
											)}
											<Message message={m} own={m.sender !== student._id} />
										</div>
									);
								})}
						</div>
					</PerfectScrollbar>
				</div>

				<div className="main-chat-footer">
					<input
						className="form-control"
						placeholder="Type your message here..."
						type="text"
						value={messageText}
						onChange={(e) => setMessageText(e.target.value)}
					/>
					<button
						className="main-msg-send"
						onClick={sendMessage}
						disabled={messageText === ""}
					>
						<i className="fe fe-send"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
