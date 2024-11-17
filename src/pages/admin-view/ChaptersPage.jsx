import React, { useEffect, useState } from "react";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createChapter, getDiplomaChapters } from "../../api/admin/chapter";

const ChaptersPage = () => {
	const { diplomaId } = useParams();
	const [chapterTitle, setChapterTitle] = useState("");
	const [showModal, setShowModal] = useState(false);
	const chapters = useSelector((state) => state.chapter);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getDiplomaChapters(diplomaId);
			dispatch({ type: "GET_CHAPTERS", payload: response.data.result });
		};
		fetchData();
	}, [dispatch, diplomaId]);

	const handleSaveChapter = async () => {
		const response = await createChapter({
			title: chapterTitle,
			diploma: diplomaId,
		});
		dispatch({ type: "ADD_CHAPTER", payload: response.data.result });
		setShowModal(false);
		dispatch({ type: "open", payload: { message: response.data.message } });
	};

	return (
		<>
			<div className="m-4 position-relative">
				<Pageheader title="Chapters" heading="Main Menu" active="Chapters" />

				<div className="mb-4">
					<Button onClick={() => setShowModal(true)}>Add Chapter</Button>
				</div>

				{chapters?.length > 0 ? (
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
											{/* <Dropdown className="float-end optiondots ms-auto">
											<Dropdown.Toggle variant="" className="option-dots">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item
													href="#"
													className="d-inline-flex align-items-center"
													onClick={() => handleAssignClick(chapter._id)}
												>
													<i className="fa fa-gift me-2"></i> Assign to Student
												</Dropdown.Item>
												<Dropdown.Item
													href="#"
													className="d-inline-flex align-items-center"
													onClick={() => editItemHandler(chapter)}
												>
													<i className="fe fe-edit me-2"></i> Edit
												</Dropdown.Item>
												<Dropdown.Item
													href="#"
													className="d-inline-flex align-items-center"
													onClick={() => {
														setConfirmDeleteShow(true);
														setDeleteItemId(chapter._id);
													}}
												>
													<i className="fe fe-trash me-2"></i> Delete
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown> */}
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
							setShowModal(false);
						}}
					>
						Close
					</Button>
					<Button variant="primary" onClick={handleSaveChapter}>
						{"Add Chapter"}
					</Button>
				</Modal.Footer>
			</Modal>{" "}
		</>
	);
};

export default ChaptersPage;
