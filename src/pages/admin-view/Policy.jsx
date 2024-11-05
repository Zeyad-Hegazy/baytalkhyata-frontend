import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Pageheader from "../../layout/layoutcomponent/pageheader";
import {
	getPolicies,
	createPolicy,
	deletePolicy,
} from "../../api/admin/policy";

const Policy = () => {
	const policies = useSelector((state) => state.policies);
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await getPolicies();
			dispatch({ type: "GET_POLICIES", payload: response.data.result });
		};
		fetchData();
	}, [dispatch]);

	const handleDelete = async (id) => {
		const response = await deletePolicy(id);
		dispatch({ type: "DELETE_POLICY", payload: id });
		dispatch({ type: "open", payload: { message: response.data.message } });
		const query = await getPolicies();
		dispatch({ type: "GET_POLICIES", payload: query.data.result });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPolicy = { title, content };
		const response = await createPolicy(newPolicy);
		dispatch({ type: "ADD_POLICY", payload: response.data });
		dispatch({ type: "open", payload: { message: response.data.message } });
		const query = await getPolicies();
		dispatch({ type: "GET_POLICIES", payload: query.data.result });
		setTitle("");
		setContent("");
	};

	return (
		<Container>
			<Pageheader
				title="Privacy Policy"
				heading="Main Menu"
				active="Privacy Policy"
			/>

			<Row className="my-4">
				<Col>
					<h2>Create New Policy</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="policyTitle" className="mb-3">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter policy title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="policyContent" className="mb-3">
							<Form.Label>Content</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="Enter policy content"
								value={content}
								onChange={(e) => setContent(e.target.value)}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Create Policy
						</Button>
					</Form>
				</Col>
			</Row>

			<Row>
				{policies.map((policy) => (
					<Col md={4} key={policy._id} className="mb-4">
						<Card className="position-relative">
							<Card.Body>
								<DeleteForeverIcon
									className="text-danger position-absolute"
									style={{ top: "10px", right: "10px", cursor: "pointer" }}
									onClick={() => handleDelete(policy._id)}
									size={24}
								/>
								<Card.Title>{policy.title}</Card.Title>
								<Card.Text>{policy.content}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Policy;
