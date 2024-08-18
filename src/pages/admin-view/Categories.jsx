import { Button, Card, Col, Modal, Row, Form } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useEffect, useState } from "react";

import { createCategory, getCategories } from "../../api/admin/category";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
	const categories = useSelector((state) => state.categories);
	const [showModal, setShowModal] = useState(false);
	const [categoryTitle, setCategoryTitle] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getCategories();
			dispatch({ type: "GET_CATEGORYIES", payload: response.data.result });
		};
		fetchData();
	}, [dispatch]);

	const handleSaveCategory = async () => {
		const response = await createCategory({ title: categoryTitle });
		dispatch({ type: "ADD_CATEGORY", payload: response.data.result });
		dispatch({ type: "open", payload: { message: response.data.message } });
		setCategoryTitle("");
		setShowModal(false);
	};

	return (
		<>
			<div className="m-4 position-relative">
				<Pageheader
					title="Categories"
					heading="Main Menu"
					active="Categories"
				/>

				<div className="mb-4">
					<Button onClick={() => setShowModal(true)}>
						<i className="fe fe-plus"></i>
					</Button>
				</div>

				<Row>
					<Col sm={12}>
						<div>
							{categories.length > 0 ? (
								categories.map((category) => (
									<Button
										key={category._id}
										variant="primary"
										style={{ width: "9rem", marginRight: "1rem" }}
									>
										{category.title}
									</Button>
								))
							) : (
								<Card>
									<Card.Body>
										<p className="text-center text-primary">
											No data available
										</p>
									</Card.Body>
								</Card>
							)}
						</div>
					</Col>
				</Row>
			</div>

			<Modal
				show={showModal}
				onHide={() => {
					setCategoryTitle("");
					setShowModal(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>{"Add New Category"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSaveCategory}>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter title"
								name="title"
								value={categoryTitle}
								onChange={(e) => setCategoryTitle(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => {
							setCategoryTitle("");
							setShowModal(false);
						}}
					>
						Close
					</Button>
					<Button variant="primary" onClick={handleSaveCategory}>
						{"Add Category"}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Categories;
