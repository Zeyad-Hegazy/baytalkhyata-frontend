import { Button, Card, Col, Modal, Row, Form } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createDiploma, getDiplomas } from "../../api/admin/diplomas";
import { useNavigate } from "react-router-dom";

const Diplomas = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getDiplomas();
			dispatch({ type: "GET_DIPLOMAS", payload: response.data.result });
		};
		fetchData();
	}, [dispatch]);

	const diplomas = useSelector((state) => state.diplomas);
	const [showModal, setShowModal] = useState(false);
	const [formState, setFormState] = useState({
		title: "",
		description: "",
		totalPoints: 0,
		price: 0,
		totalHours: 0,
		expiresIn: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleClose = () => {
		setShowModal(false);
		setFormState({
			title: "",
			description: "",
			totalPoints: 0,
			price: 0,
			totalHours: 0,
			expiresIn: "",
		});
	};

	const handleSave = async (e) => {
		e?.preventDefault();
		// if (isEdit) {
		// 	const response = await updatePdfFile(editItemId, {
		// 		title: newItemTitle,
		// 		pdf: newItemBase64 === "" ? null : newItemBase64,
		// 	});
		// 	dispatch({ type: "UPT_LIBITEM", payload: response.data.result });
		// 	dispatch({ type: "open", payload: { message: response.data.message } });
		// } else {
		const response = await createDiploma({
			...formState,
			expiresIn: new Date(formState.expiresIn),
		});
		dispatch({ type: "ADD_DIPLOMA", payload: response.data.result });
		dispatch({ type: "open", payload: { message: response.data.message } });
		// }
		handleClose();
	};

	return (
		<>
			<div className="m-4 position-relative">
				<Pageheader title="Diplomas" heading="Main Menu" active="Diplomas" />

				<div className="mb-4">
					<Button onClick={() => setShowModal(true)}>Add Diploma</Button>
				</div>

				{diplomas?.length > 0 ? (
					<Row className="row">
						{diplomas.map((diploma) => (
							<Col sm={3} key={diploma._id}>
								<Card className="card-primary">
									<Card.Header className="pb-0 d-flex">
										<h5 className="card-title mb-0 pb-0">{diploma.title}</h5>
									</Card.Header>
									<Card.Body className="text-primary">
										{diploma.description}
									</Card.Body>
									<Card.Footer>
										<div className="d-flex justify-content-between mb-6">
											<h6>
												Total Hours:{" "}
												<span className="text-primary">
													{diploma.totalHours}
												</span>
											</h6>
											<h6>
												Chapters:{" "}
												<span className="text-primary">{diploma.chapters}</span>
											</h6>
										</div>
										<div className="d-flex justify-content-between">
											<h6>
												Price:{" "}
												<span className="text-primary">L.E{diploma.price}</span>
											</h6>
											<h6>
												Total Points:{" "}
												<span className="text-primary">
													{diploma.totalPoints}
												</span>
											</h6>
										</div>
									</Card.Footer>
									<div className="m-2">
										<Button
											onClick={() => {
												navigate("/admin/chapters/" + diploma._id);
											}}
										>
											Add Chapter
										</Button>
									</div>
								</Card>
							</Col>
						))}
					</Row>
				) : (
					<Card>
						<Card.Body>
							<p className="text-center text-primary">No data available</p>
						</Card.Body>
					</Card>
				)}
			</div>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{"Add New Diploma"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSave}>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter title"
								name="title"
								value={formState.title}
								onChange={handleInputChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="Enter description"
								name="description"
								value={formState.description}
								onChange={handleInputChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formTotalPoints">
							<Form.Label>Total Points</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter total points"
								name="totalPoints"
								value={formState.totalPoints}
								onChange={handleInputChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formPrice">
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter price"
								name="price"
								value={formState.price}
								onChange={handleInputChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formTotalHours">
							<Form.Label>Total Hours</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter total hours"
								name="totalHours"
								value={formState.totalHours}
								onChange={handleInputChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formExpiresIn">
							<Form.Label>Expires In</Form.Label>
							<Form.Control
								type="date" // Use date type
								name="expiresIn"
								value={formState.expiresIn}
								onChange={handleInputChange}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave}>
						{"Add Diploma"}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Diplomas;
