import React, { useCallback, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	createChapter,
	deleteChapter,
	getDiplomaChapters,
	updateChapter,
} from "../../api/admin/chapter";

const ChaptersPage = () => {
	const { diplomaId } = useParams();
	const [chapterTitle, setChapterTitle] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const [isEdit, setIsEdit] = useState(false);
	const [editItemId, setEditItemId] = useState(null);

	const chapters = useSelector((state) => state.chapter);
	const dispatch = useDispatch();

	const editChapterHandler = (chapter) => {
		setEditItemId(chapter._id);
		setChapterTitle(chapter.title);
		setIsEdit(true);
		setShowModal(true);
	};

	const fetchData = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await getDiplomaChapters(diplomaId);
			dispatch({ type: "GET_CHAPTERS", payload: response.data.result });
		} catch (error) {
			console.error("Error fetching chapter levels:", error);
		} finally {
			setIsLoading(false);
		}
	}, [diplomaId, dispatch]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const handleSaveChapter = async (e) => {
		e?.preventDefault();

		if (isEdit) {
			const response = await updateChapter(editItemId, { title: chapterTitle });
			dispatch({ type: "open", payload: { message: response.data.message } });
			await fetchData();
			setShowModal(false);
		} else {
			const response = await createChapter({
				title: chapterTitle,
				diploma: diplomaId,
			});
			dispatch({ type: "ADD_CHAPTER", payload: response.data.result });
			setShowModal(false);
			dispatch({ type: "open", payload: { message: response.data.message } });
		}
	};

	const deleteChapterHandler = async (id) => {
		try {
			const response = await deleteChapter(id);
			dispatch({
				type: "open",
				payload: { message: response.data.message },
			});
			await fetchData();
		} catch (error) {
			console.error("Deleting failed", error);
		}
	};

	return (
		<>
			<div className="m-4 position-relative">
				<Pageheader title="Chapters" heading="Main Menu" active="Chapters" />

				<div className="mb-4">
					<Button
						onClick={() => {
							setIsEdit(false);
							setShowModal(true);
							setChapterTitle("");
						}}
					>
						Add Chapter
					</Button>
				</div>

				{isLoading ? (
					<div className="text-center my-5">
						<Spinner animation="border" variant="primary" />
						<p className="mt-2">Loading...</p>
					</div>
				) : chapters?.length > 0 ? (
					<Row className="row">
						{chapters.map((chapter) => (
							<Col sm={3} key={chapter._id}>
								<Card className="card-primary">
									<Card.Header
										className="pb-0"
										style={{ position: "relative" }}
									>
										<h5 className="card-title mb-0 pb-0">{chapter.title}</h5>
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
														onClick={() => editChapterHandler(chapter)}
													>
														<i className="fe fe-edit me-2"></i> Edit
													</Dropdown.Item>
													<Dropdown.Item
														href="#"
														className="d-inline-flex align-items-center"
														onClick={() => deleteChapterHandler(chapter._id)}
													>
														<i className="fe fe-trash me-2"></i> Delete
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</Card.Header>

									<div className="m-4">
										<Link to={"/admin/levels/managment/" + chapter._id}>
											<Button>Manage Levels</Button>
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
					setChapterTitle("");
					setShowModal(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						{isEdit ? "Edit Chapter Title" : "Add New Chapter"}
					</Modal.Title>
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
							setShowModal(false);
						}}
					>
						Close
					</Button>
					<Button variant="primary" onClick={handleSaveChapter}>
						{isEdit ? "Edit Chapter" : "Add Chapter"}
					</Button>
				</Modal.Footer>
			</Modal>{" "}
		</>
	);
};

export default ChaptersPage;
