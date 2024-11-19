import { useCallback, useEffect, useState } from "react";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import {
	Button,
	Card,
	Col,
	Dropdown,
	Form,
	Modal,
	Row,
	Spinner,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import {
	addLevelToChapter,
	deleteLevel,
	getChapterLevels,
	updateLevel,
} from "../../api/admin/chapter";
import { useDispatch } from "react-redux";

const LevelsPage = () => {
	const { chapterId } = useParams();
	const [showModal, setShowModal] = useState(false);
	const [levels, setLevels] = useState([]);
	const [levelTitle, setLevelTitle] = useState("");
	const [levelOrder, setLevelOrder] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isEdit, setIsEdit] = useState(false);
	const [editItemId, setEditItemId] = useState(null);

	const dispatch = useDispatch();

	const editLevelHandler = (level) => {
		setEditItemId(level._id);
		setLevelTitle(level.title);
		setLevelOrder(level.order);
		setIsEdit(true);
		setShowModal(true);
	};

	const fetchLevels = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await getChapterLevels(chapterId);
			setLevels(response.data.result.levels);
		} catch (error) {
			console.error("Error fetching chapter levels:", error);
		} finally {
			setIsLoading(false);
		}
	}, [chapterId]);

	useEffect(() => {
		fetchLevels();
	}, [fetchLevels]);

	const handleSaveLevel = async (e) => {
		e?.preventDefault();

		if (isEdit) {
			const response = await updateLevel(editItemId, {
				title: levelTitle,
				order: +levelOrder,
			});
			await fetchLevels();
			setShowModal(false);
			dispatch({ type: "open", payload: { message: response.data.message } });
		} else {
			const response = await addLevelToChapter(chapterId, {
				title: levelTitle,
				order: +levelOrder,
			});
			setShowModal(false);
			setLevels((prevState) => [...prevState, response.data.result]);
			dispatch({ type: "open", payload: { message: response.data.message } });
		}
	};

	const deleteLevelHandler = async (id) => {
		try {
			const response = await deleteLevel(id);
			dispatch({
				type: "open",
				payload: { message: response.data.message },
			});
			await fetchLevels();
		} catch (error) {
			console.error("Deleting failed", error);
		}
	};

	return (
		<>
			<div className="m-4 position-relative">
				<Pageheader title="Levels" heading="Main Menu" active="Levels" />

				<div className="mb-4">
					<Button
						onClick={() => {
							setIsEdit(false);
							setShowModal(true);
							setLevelTitle("");
							setLevelOrder("");
						}}
					>
						Add Level
					</Button>
				</div>

				{isLoading ? (
					<div className="text-center my-5">
						<Spinner animation="border" variant="primary" />
						<p className="mt-2">Loading...</p>
					</div>
				) : levels?.length > 0 ? (
					<Row className="row">
						{levels.map((level) => (
							<Col sm={3} key={level._id}>
								<Card className="card-primary">
									<Card.Header
										className="pb-0"
										style={{ position: "relative" }}
									>
										<h5 className="card-title mb-0 pb-0">{level.title}</h5>
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
														onClick={() => editLevelHandler(level)}
													>
														<i className="fe fe-edit me-2"></i> Edit
													</Dropdown.Item>
													<Dropdown.Item
														href="#"
														className="d-inline-flex align-items-center"
														onClick={() => deleteLevelHandler(level._id)}
													>
														<i className="fe fe-trash me-2"></i> Delete
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</Card.Header>

									<div className="m-4">
										<Link to={"/admin/items/managment/" + level._id}>
											<Button>Manage Items</Button>
										</Link>
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
			<Modal
				show={showModal}
				onHide={() => {
					setLevelTitle("");
					setLevelOrder("");
					setShowModal(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>{isEdit ? "Edit Level" : "Add New Level"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSaveLevel}>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter title"
								name="title"
								value={levelTitle}
								onChange={(e) => setLevelTitle(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Order</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter title"
								name="title"
								value={levelOrder}
								onChange={(e) => setLevelOrder(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => {
							setLevelTitle("");
							setLevelOrder("");
							setShowModal(false);
						}}
					>
						Close
					</Button>
					<Button variant="primary" onClick={handleSaveLevel}>
						{isEdit ? "Edit Level" : "Add Level"}
					</Button>
				</Modal.Footer>
			</Modal>{" "}
		</>
	);
};

export default LevelsPage;
