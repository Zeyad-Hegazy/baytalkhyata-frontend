import { useEffect, useState } from "react";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Row, Form, Modal, Spinner } from "react-bootstrap";
import Dropzone from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";

import { addLevelToChapter, getChapterLevels } from "../../api/admin/chapter";
import Quiz from "./Quiz";

import { useParams } from "react-router-dom";

const formatBytes = (bytes) => {
	const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	if (bytes === 0) return "0 Byte";
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return Math.round((bytes / Math.pow(1024, i)) * 10) / 10 + " " + sizes[i];
};

function removeBase64Prefix(base64String) {
	return base64String.replace(/^data:\w+\/[\w-]+;base64,/, "");
}

const NewChapters = () => {
	const { chapterId } = useParams();
	const [levels, setLevels] = useState([]);
	const dispatch = useDispatch();
	const chapter = useSelector((state) => state.chapter.chapter);
	const [showForm, setShowForm] = useState(false);
	const [levelTitle, setLevelTitle] = useState("");
	const [sections, setSections] = useState([
		{ title: "", items: [], order: 1 },
	]);
	const [showItemModal, setShowItemModal] = useState(false);
	const [currentSectionIndex, setCurrentSectionIndex] = useState(null);
	const [item, setItem] = useState({
		type: "",
		title: "",
		description: "",
		points: 0,
		fileBuffer: null,
		size: "",
	});

	const [openFinalQuiz, setOpenFinalQuiz] = useState(false);

	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (chapterId) {
			const fetchLevels = async () => {
				try {
					const response = await getChapterLevels(chapterId);
					setLevels(response.data.result.levels);
					console.log(response.data.result.levels);
				} catch (error) {
					console.error("Error fetching chapter levels:", error);
				}
			};
			fetchLevels();
		}
	}, [chapterId, setIsSubmitting]);

	const openItemModal = (sectionIndex) => {
		setCurrentSectionIndex(sectionIndex);
		setItem({
			type: "",
			title: "",
			description: "",
			points: 0,
			fileBuffer: null,
		});
		setShowItemModal(true);
	};

	const addSection = () => {
		setSections([
			...sections,
			{ title: "", items: [], order: sections.length + 1 },
		]);
	};

	const addItemToSection = () => {
		const updatedSections = [...sections];
		updatedSections[currentSectionIndex].items.push(item);
		setSections(updatedSections);
		setShowItemModal(false);
		setItem({
			type: "",
			title: "",
			description: "",
			points: 0,
			fileBuffer: null,
		});
	};

	const removeSection = (sectionIndex) => {
		const updatedSections = sections.filter(
			(_, index) => index !== sectionIndex
		);
		setSections(
			updatedSections.map((section, index) => ({
				...section,
				order: index + 1,
			}))
		);
	};

	const removeItemFromSection = (sectionIndex, itemIndex) => {
		const updatedSections = [...sections];
		updatedSections[sectionIndex].items = updatedSections[
			sectionIndex
		].items.filter((_, index) => index !== itemIndex);
		setSections(updatedSections);
	};

	const handleFileUpload = (acceptedFiles) => {
		if (acceptedFiles && acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			const reader = new FileReader();

			reader.onloadend = () => {
				const base64String = reader.result;

				setItem((prevItem) => ({
					...prevItem,
					fileBuffer: removeBase64Prefix(base64String),
					size: formatBytes(file.size),
				}));
			};

			reader.onerror = () => {
				console.error("Error reading file as base64:", reader.error);
			};

			reader.readAsDataURL(file);
		}
	};

	const handleCreateLevel = async () => {
		try {
			setIsSubmitting(true);
			const newLevel = {
				title: levelTitle,
				order: chapter.levels.length + 1,
				sections,
			};
			const response = await addLevelToChapter(chapter._id, newLevel);
			dispatch({
				type: "open",
				payload: { message: response.data.message },
			});
		} catch (error) {
			console.error("Submission failed", error);
		} finally {
			setIsSubmitting(false);
			setLevelTitle("");
			setSections([{ title: "", items: [], order: 1 }]);
			setCurrentSectionIndex(null);
			setItem({
				type: "",
				title: "",
				description: "",
				points: 0,
				fileBuffer: null,
				size: "",
			});
			setShowForm(false);
		}
	};

	return (
		<>
			<div className="m-4 position-relative">
				<Pageheader title="Chapters" heading="Main Menu" active="Chapters" />
				<Row>
					<Col sm={3}>
						<Card className="card-primary">
							<Card.Header>
								<h5 className="card-title mb-0">{chapter.title}</h5>
							</Card.Header>
							<Card.Body>{/* Additional chapter info if needed */}</Card.Body>
						</Card>
						{levels.length > 0 &&
							levels.map((level) => (
								<Col key={level._id} sm={12}>
									<Card>
										<Card.Header style={{ cursor: "pointer" }}>
											{level.title}
										</Card.Header>
									</Card>
								</Col>
							))}
					</Col>

					<Col sm={9}>
						<div className="d-flex gap-4">
							<div className="mt-4">
								<Button
									onClick={() => {
										setShowForm((prevState) => !prevState);
										setOpenFinalQuiz(false);
									}}
								>
									<i className="fe fe-plus"></i> <span>Add Level</span>
								</Button>
							</div>
							<div className="mt-4">
								<Button
									onClick={() => {
										setOpenFinalQuiz((prevState) => !prevState);
										setShowForm(false);
									}}
								>
									<span>Create Final Quiz</span>
								</Button>
							</div>
						</div>

						{showForm && (
							<Row>
								<Col sm={12}>
									<Card className="mt-4">
										<Card.Header>
											<h5 className="card-title mb-0">New Level</h5>
										</Card.Header>
										<Card.Body>
											<Form>
												<Form.Group>
													<Form.Label>Level Title</Form.Label>
													<Form.Control
														type="text"
														value={levelTitle}
														onChange={(e) => setLevelTitle(e.target.value)}
													/>
												</Form.Group>

												{sections.map((section, sectionIndex) => (
													<div key={sectionIndex} className="mt-3 ps-3">
														<Form.Group>
															<Form.Label>
																Section Title (Order {section.order})
															</Form.Label>
															<Form.Control
																type="text"
																value={section.title}
																onChange={(e) => {
																	const updatedSections = [...sections];
																	updatedSections[sectionIndex].title =
																		e.target.value;
																	setSections(updatedSections);
																}}
															/>
														</Form.Group>

														{section.items.length > 0 && (
															<div className="d-flex flex-row gap-4 flex-wrap">
																{section.items.map((item, itemIndex) => (
																	<div
																		key={itemIndex}
																		className="p-2 w-12 mt-2 d-flex gap-2 align-items-center"
																		style={{ backgroundColor: "#f1f5f9" }}
																	>
																		<span className="text-black">
																			{item.title}
																		</span>
																		<CloseIcon
																			style={{ cursor: "pointer" }}
																			onClick={() =>
																				removeItemFromSection(
																					sectionIndex,
																					itemIndex
																				)
																			}
																		/>
																	</div>
																))}
															</div>
														)}

														<Button
															variant="danger"
															className="mt-2 me-2"
															onClick={() => removeSection(sectionIndex)}
														>
															Remove Section
														</Button>

														<Button
															variant="secondary"
															className="mt-2"
															onClick={() => openItemModal(sectionIndex)}
														>
															Add Item
														</Button>
													</div>
												))}

												<Button
													variant="secondary"
													className="mt-3"
													onClick={addSection}
												>
													Add Section
												</Button>
											</Form>
										</Card.Body>
										<Card.Footer>
											<Button variant="primary" onClick={handleCreateLevel}>
												{isSubmitting ? (
													<>
														<Spinner
															as="span"
															animation="border"
															size="sm"
															role="status"
															aria-hidden="true"
														/>
														Submitting...
													</>
												) : (
													"Save Level"
												)}
											</Button>
										</Card.Footer>
									</Card>
								</Col>
							</Row>
						)}
						{openFinalQuiz && (
							<Card className="mt-4">
								<Quiz
									chapterId={chapter._id}
									setOpenFinalQuiz={setOpenFinalQuiz}
								/>
							</Card>
						)}
					</Col>
				</Row>
			</div>

			<Modal show={showItemModal} onHide={() => setShowItemModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Add Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group>
						<Form.Label>Item Title</Form.Label>
						<Form.Control
							type="text"
							value={item.title}
							onChange={(e) => setItem({ ...item, title: e.target.value })}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Item Type</Form.Label>
						<Form.Control
							as="select"
							value={item.type}
							onChange={(e) => setItem({ ...item, type: e.target.value })}
						>
							<option value="">Select Type</option>
							<option value="video">Video</option>
							<option value="audio">Audio</option>
							<option value="image">Image</option>
							<option value="pdf">PDF</option>
							<option value="text">Text</option>
						</Form.Control>
					</Form.Group>

					{item.fileBuffer ? (
						<div
							style={{
								textAlign: "center",
								backgroundColor: "#5aa17f",
								color: "white",
								padding: "1rem",
								margin: "10px",
							}}
						>
							{item.type} uploaded
						</div>
					) : (
						<Dropzone onDrop={handleFileUpload}>
							{({ getRootProps, getInputProps, isDragActive }) => (
								<div
									{...getRootProps()}
									className={`border-dashed border-2 p-4 rounded-md ${
										isDragActive ? "bg-gray-200" : "bg-white"
									}`}
								>
									<input {...getInputProps()} />
									{isDragActive ? (
										<p>Drop the file here...</p>
									) : (
										<p>Drag 'n' drop a file here, or click to select a file</p>
									)}
								</div>
							)}
						</Dropzone>
					)}

					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							type="text"
							value={item.description}
							onChange={(e) =>
								setItem({ ...item, description: e.target.value })
							}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Points</Form.Label>
						<Form.Control
							type="number"
							value={item.points}
							onChange={(e) =>
								setItem({ ...item, points: parseInt(e.target.value, 10) })
							}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowItemModal(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={addItemToSection}>
						Add Item
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default NewChapters;
