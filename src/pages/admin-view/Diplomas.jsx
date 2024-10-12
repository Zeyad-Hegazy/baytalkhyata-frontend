import {
	Button,
	Card,
	Col,
	Modal,
	Row,
	Form,
	Dropdown,
	Collapse,
} from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
	createDiploma,
	getDiplomas,
	deleteDiploma,
	updateDiploma,
	assignDiploma,
} from "../../api/admin/diplomas";
import { useNavigate } from "react-router-dom";
import { createChapter } from "./../../api/admin/chapter";

const formatDate = (isoDate) => {
	const date = new Date(isoDate);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

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
	const students = useSelector((state) => state.students);

	const [showModal, setShowModal] = useState(false);
	const [confirmDeleteShow, setConfirmDeleteShow] = useState(false);

	const [deleteItemId, setDeleteItemId] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const [editItemId, setEditItemId] = useState(null);

	const [chapterTitle, setChapterTitle] = useState("");
	const [showChapterModal, setShowChapterModal] = useState(false);

	const [diplomaId, setDiplomaId] = useState("");

	const [formState, setFormState] = useState({
		title: "",
		description: "",
		totalPoints: 0,
		price: 0,
		totalHours: 0,
		expiresIn: "",
	});

	const [showAssignModal, setShowAssignModal] = useState(false);
	const [selectedDiplomaId, setSelectedDiplomaId] = useState("");

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
		if (isEdit) {
			const response = await updateDiploma(editItemId, {
				...formState,
				expiresIn: new Date(formState.expiresIn),
			});
			dispatch({ type: "UPT_DIPLOMA", payload: response.data.result });
			dispatch({ type: "open", payload: { message: response.data.message } });
		} else {
			const response = await createDiploma({
				...formState,
				expiresIn: new Date(formState.expiresIn),
			});
			dispatch({ type: "ADD_DIPLOMA", payload: response.data.result });
			dispatch({ type: "open", payload: { message: response.data.message } });
		}
		handleClose();
	};

	const editItemHandler = (diploma) => {
		setEditItemId(diploma._id);
		setFormState({
			title: diploma.title,
			description: diploma.description,
			totalHours: diploma.totalHours,
			totalPoints: diploma.totalPoints,
			price: diploma.price,
			expiresIn: diploma.expiresIn,
		});
		setIsEdit(true);
		setShowModal(true);
	};

	const handleDeleteClick = async () => {
		const response = await deleteDiploma(deleteItemId);
		dispatch({ type: "RMV_DIPLOMA", payload: { id: deleteItemId } });
		dispatch({ type: "open", payload: { message: response.data.message } });
		setDeleteItemId(null);
		setConfirmDeleteShow(false);
	};

	const handleSaveChapter = async () => {
		const response = await createChapter({
			title: chapterTitle,
			diploma: diplomaId,
		});
		dispatch({ type: "ADD_CHAPTER", payload: response.data.result });
		dispatch({ type: "open", payload: { message: response.data.message } });
		navigate("/admin/chapters");
	};

	const [openCards, setOpenCards] = useState({});

	const toggleCollapse = (id) => {
		setOpenCards((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}));
	};

	const handleAssignClick = (diplomaId) => {
		setSelectedDiplomaId(diplomaId);
		setShowAssignModal(true);
	};

	const handleAssignDiploma = async (studentId) => {
		try {
			const response = await assignDiploma(studentId, {
				diplomaId: selectedDiplomaId,
			});
			setShowAssignModal(false);
			dispatch({ type: "open", payload: { message: response.data.message } });
		} catch (error) {
			setShowAssignModal(false);
			dispatch({
				type: "open",
				payload: { message: error.response.data.message },
			});
		}
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
									<Card.Header
										className="pb-0"
										style={{ position: "relative" }}
									>
										<h5 className="card-title mb-0 pb-0">{diploma.title}</h5>
										<div
											className="d-flex align-items-center px-3 pt-3"
											style={{ position: "absolute", top: "-10px", right: "0" }}
										>
											<Dropdown className="float-end optiondots ms-auto">
												<Dropdown.Toggle variant="" className="option-dots">
													<i className="fe fe-more-vertical"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item
														href="#"
														className="d-inline-flex align-items-center"
														onClick={() => handleAssignClick(diploma._id)}
													>
														<i className="fa fa-gift me-2"></i> Assign to
														Student
													</Dropdown.Item>
													<Dropdown.Item
														href="#"
														className="d-inline-flex align-items-center"
														onClick={() => editItemHandler(diploma)}
													>
														<i className="fe fe-edit me-2"></i> Edit
													</Dropdown.Item>
													<Dropdown.Item
														href="#"
														className="d-inline-flex align-items-center"
														onClick={() => {
															setConfirmDeleteShow(true);
															setDeleteItemId(diploma._id);
														}}
													>
														<i className="fe fe-trash me-2"></i> Delete
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
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
												<span className="text-primary">
													{diploma.chapters.length}
												</span>
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
										<Button
											variant="link"
											onClick={() => toggleCollapse(diploma._id)}
											aria-controls={`chapters-collapse-${diploma._id}`}
											aria-expanded={openCards[diploma._id]}
											className="mt-2"
										>
											{openCards[diploma._id]
												? "Hide Chapters ▲"
												: "Show Chapters ▼"}
										</Button>
										<Collapse in={openCards[diploma._id]}>
											<div
												id={`chapters-collapse-${diploma._id}`}
												className="mt-3"
											>
												<ul className="list-unstyled">
													{diploma.chapters.length > 0 ? (
														diploma.chapters.map((chapter, index) => (
															<li key={index}>
																{"- Chapter "} {index + 1} {" :"}{" "}
																{chapter.title}
															</li>
														))
													) : (
														<li>No chapters available</li>
													)}
												</ul>
											</div>
										</Collapse>
									</Card.Footer>
									<div className="m-2">
										<Button
											onClick={() => {
												setShowChapterModal(true);
												setDiplomaId(diploma._id);
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
					<Modal.Title>
						{isEdit ? "Edit Diploma" : "Add New Diploma"}
					</Modal.Title>
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
								type="date"
								name="expiresIn"
								value={formatDate(formState.expiresIn)}
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
						{isEdit ? "Update Diploma" : "Add Diploma"}
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal
				show={confirmDeleteShow}
				onHide={() => setConfirmDeleteShow(false)}
				size="sm"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Confirm Deletion
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Are you sure you want to delete this contact?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleDeleteClick}>
						Delete
					</Button>
					<Button onClick={() => setConfirmDeleteShow(false)}>Cancel</Button>
				</Modal.Footer>
			</Modal>

			<Modal
				show={showChapterModal}
				onHide={() => {
					setChapterTitle("");
					setShowChapterModal(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>{"Add New Chapter"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSaveChapter}>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter title"
								name="title"
								value={chapterTitle}
								onChange={(e) => setChapterTitle(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => {
							setChapterTitle("");
							setShowChapterModal(false);
						}}
					>
						Close
					</Button>
					<Button variant="primary" onClick={handleSaveChapter}>
						{"Add Chapter"}
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showAssignModal} onHide={() => setShowAssignModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Assign Diploma to Student</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formStudents">
							<Form.Label>Select Student</Form.Label>
							<Form.Control
								as="select"
								onChange={(e) => handleAssignDiploma(e.target.value)}
							>
								<option value="">Select Student</option>
								{students.map((student) => (
									<option key={student._id} value={student._id}>
										{student.fullName}
									</option>
								))}
							</Form.Control>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowAssignModal(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Diplomas;
