import { Button, Card, Col, Modal, Row, Form } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useSelector } from "react-redux";
import { useState } from "react";

const Diplomas = () => {
	const diplomas = useSelector((state) => state.diplomas);
	const [showModal, setShowModal] = useState(false);
	const [formState, setFormState] = useState({
		title: "",
	});

	const handleClose = () => {
		setShowModal(false);
		setFormState({ title: "" });
		// setNewTitle("");
		// setNewItemBase64(null);
		// setIsEdit(false);
		// setEditItemId(null);
	};

	const handleSave = (e) => {
		// if (isEdit) {
		// 	const response = await updatePdfFile(editItemId, {
		// 		title: newItemTitle,
		// 		pdf: newItemBase64 === "" ? null : newItemBase64,
		// 	});
		// 	dispatch({ type: "UPT_LIBITEM", payload: response.data.result });
		// 	dispatch({ type: "open", payload: { message: response.data.message } });
		// } else {
		// 	const response = await createPdfItem({
		// 		title: newItemTitle,
		// 		pdf: newItemBase64 === "" ? null : newItemBase64,
		// 	});
		// 	dispatch({ type: "ADD_LIBITEM", payload: response.data.result });
		// 	dispatch({ type: "open", payload: { message: response.data.message } });
		// }
		e?.preventDefault();
		console.log(formState.title);
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
					diplomas.map((diploma) => (
						<Row className="row" key={diploma._id}>
							<Col sm={4}>
								<Card className={`card-primary`}>
									<Card.Header className="pb-0 d-flex">
										<h5 className="card-title mb-0 pb-0">{diploma.title}</h5>
									</Card.Header>
									<Card.Body className={`text-primary`}>
										{diploma.description}
									</Card.Body>
									<Card.Footer className="d-flex justify-content-between">
										<h6>
											Total Hours :
											<span className="text-primary">
												${diploma.totalHours}
											</span>
										</h6>
										<h6>
											Chapters :
											<span className="text-primary">{diploma.chapters}</span>
										</h6>
									</Card.Footer>
									<div className="m-2">
										<Button>Add Chapter</Button>
									</div>
								</Card>
							</Col>
						</Row>
					))
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
								onChange={(e) => setFormState({ title: e.target.value })}
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
