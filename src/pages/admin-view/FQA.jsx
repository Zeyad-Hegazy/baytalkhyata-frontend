import { useState } from "react";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { Form, Button, Container } from "react-bootstrap";
import { createQuestion } from "./../../api/admin/fqa";
import { useDispatch } from "react-redux";
import { ErrorOutlineRounded } from "@mui/icons-material";

const FQA = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [replies, setReplies] = useState([""]);

	const addReplyField = () => setReplies([...replies, ""]);

	const handleReplyChange = (index, value) => {
		const newReplies = [...replies];
		newReplies[index] = value;
		setReplies(newReplies);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const requestData = {
				title,
				replayes: replies.filter((reply) => reply.trim() !== ""),
			};
			const response = await createQuestion(requestData);
			dispatch({ type: "open", payload: { message: response.data.message } });

			setTitle("");
			setReplies([""]);
		} catch (error) {
			console.error("somthing wen wrogn while createing FQA", error.message);
		}
	};

	return (
		<Container>
			<Pageheader title="FQA" heading="Main Menu" active="FQA" />

			<Form onSubmit={handleSubmit} className="mt-4 p-4 border rounded">
				<Form.Group controlId="title">
					<Form.Label>Question Title</Form.Label>
					<Form.Control
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mt-3">
					<Form.Label>Replies</Form.Label>
					{replies.map((reply, index) => (
						<Form.Control
							key={index}
							type="text"
							value={reply}
							onChange={(e) => handleReplyChange(index, e.target.value)}
							placeholder={`Reply ${index + 1}`}
							className="mb-2"
						/>
					))}
					<Button variant="secondary" onClick={addReplyField} className="mt-2">
						Add Another Reply
					</Button>
				</Form.Group>

				<Button type="submit" variant="primary" className="mt-3">
					Submit FAQ
				</Button>
			</Form>
		</Container>
	);
};

export default FQA;
