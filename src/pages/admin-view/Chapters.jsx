import { Button, Card, Col, Form, Row, Modal, Spinner } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import SunEditor from "suneditor-react";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { addLevelToChapter } from "../../api/admin/chapter";

import Quiz from "./Quiz";

const formatBytes = (bytes) => {
	const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	if (bytes === 0) return "0 Byte";
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return Math.round((bytes / Math.pow(1024, i)) * 10) / 10 + " " + sizes[i];
};

const initialState = {
	activeSection: "One",
	activeType: null,
	uploadedVideo: { file: null, base64: null, points: "" },
	uploadedAudio: { file: null, base64: null, points: "" },
	uploadedPdf: { file: null, base64: null, points: "" },
	uploadedImage: { file: null, base64: null, points: "" },
	text: "",
	showTextEditor: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "SET_ACTIVE_SECTION":
			return { ...state, activeSection: action.payload };
		case "SET_ACTIVE_TYPE":
			return { ...state, activeType: action.payload };
		case "SET_FILE_UPLOAD":
			return { ...state, [action.payload.type]: action.payload.data };
		case "SET_POINTS":
			return {
				...state,
				[`uploaded${
					state.activeType.charAt(0).toUpperCase() + state.activeType.slice(1)
				}`]: {
					...state[
						`uploaded${
							state.activeType.charAt(0).toUpperCase() +
							state.activeType.slice(1)
						}`
					],
					points: +action.payload,
				},
			};
		case "SET_TEXT":
			return { ...state, text: action.payload };
		case "SET_SHOW_TEXT_EDITOR":
			return { ...state, showTextEditor: action.payload };
		case "RESET":
			return {
				...state,
				[`uploaded${
					state.activeType.charAt(0).toUpperCase() + state.activeType.slice(1)
				}`]: { file: null, base64: null, points: "" },
			};
		case "RESET_ALL":
			return initialState;
		case "SET_SECTION":
			return { ...state, activeSection: action.payload };
		default:
			return state;
	}
}

const Chapters = () => {
	const chapter = useSelector((state) => state.chapter.chapter);
	const [state, dispatch] = useReducer(reducer, initialState);
	const reduxDispatch = useDispatch();
	const navigate = useNavigate();

	const htmlWithTableImages = "<center>  </center>";
	const [value, setValue] = useState(htmlWithTableImages);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleFileUpload = (acceptedFiles) => {
		if (acceptedFiles && acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64String = reader.result;

				dispatch({
					type: "SET_FILE_UPLOAD",
					payload: {
						type: `uploaded${
							state.activeType.charAt(0).toUpperCase() +
							state.activeType.slice(1)
						}`,
						data: { file, base64: base64String, points: 0 },
					},
				});
			};
			reader.readAsDataURL(file);
		}
	};

	const onDrop = useCallback(
		(acceptedFiles) => {
			handleFileUpload(acceptedFiles);
		},
		[state.activeType]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept:
			state.activeType === "video"
				? "video/*"
				: state.activeType === "audio"
				? "audio/*"
				: state.activeType === "pdf"
				? "application/pdf"
				: state.activeType === "image"
				? "image/*"
				: "*",
	});

	const getNextSection = (section) => {
		switch (section) {
			case "One":
				return "Two";
			case "Two":
				return "Three";
			case "Three":
				return "Four";
			case "Four":
				return "Five";
			case "Five":
				return null;
			default:
				return null;
		}
	};

	const submitLevleHandler = async () => {
		setIsSubmitting(true);

		const levelFormat = {
			level: state.activeSection,
			video: {
				base64: state.uploadedVideo.base64,
				points: +state.uploadedVideo.points,
			},
			audio: {
				base64: state.uploadedAudio.base64,
				points: +state.uploadedAudio.points,
			},
			image: {
				base64: state.uploadedImage.base64,
				points: +state.uploadedImage.points,
			},
			pdf: {
				base64: state.uploadedPdf.base64,
				points: +state.uploadedPdf.points,
			},
			text: { text: state.text, points: 50 },
		};

		try {
			const response = await addLevelToChapter(chapter._id, levelFormat);

			reduxDispatch({
				type: "open",
				payload: { message: response.data.message },
			});
			dispatch({ type: "RESET_ALL" });

			const nextSection = getNextSection(state.activeSection);

			if (nextSection) {
				dispatch({ type: "SET_SECTION", payload: nextSection });
			} else {
				navigate("/admin/diplomas");
				reduxDispatch({
					type: "open",
					payload: { message: "All levels created successfully" },
				});
			}
		} catch (error) {
			console.error("Submission failed", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		console.log("Active type updated to:", state.activeType);
		console.log("Show Text Editot:", state.showTextEditor);
	}, [state.activeType]);

	return (
		<div className="m-4 position-relative">
			<Pageheader title="Chapters" heading="Main Menu" active="Chapters" />

			{chapter && (
				<Row className="row">
					<Col sm={6}>
						<Card className={`card-primary`}>
							<Card.Header className="pb-0">
								<h5 className="card-title mb-0">{chapter.title}</h5>
								<Card.Body></Card.Body>
							</Card.Header>
						</Card>
					</Col>
				</Row>
			)}
			<Row className="mb-4">
				<Col sm={12}>
					<Button
						className="me-2"
						variant="primary"
						onClick={() =>
							dispatch({ type: "SET_ACTIVE_SECTION", payload: "One" })
						}
						disabled={state.activeSection !== "One"}
					>
						One
					</Button>
					<Button
						className="me-2"
						variant="primary"
						onClick={() =>
							dispatch({ type: "SET_ACTIVE_SECTION", payload: "Two" })
						}
						disabled={state.activeSection !== "Two"}
					>
						Two
					</Button>
					<Button
						className="me-2"
						variant="primary"
						onClick={() =>
							dispatch({ type: "SET_ACTIVE_SECTION", payload: "Three" })
						}
						disabled={state.activeSection !== "Three"}
					>
						Three
					</Button>
					<Button
						className="me-2"
						variant="primary"
						onClick={() =>
							dispatch({ type: "SET_ACTIVE_SECTION", payload: "Four" })
						}
						disabled={state.activeSection !== "Four"}
					>
						Four
					</Button>
					<Button
						variant="primary"
						onClick={() =>
							dispatch({ type: "SET_ACTIVE_SECTION", payload: "Five" })
						}
						disabled={state.activeSection !== "Five"}
					>
						Five
					</Button>
				</Col>
			</Row>

			{state.activeSection !== "Five" && (
				<Card className={`card-primary`}>
					<Card.Header className="pb-0">
						<h5 className="card-title mb-0">
							Level{" "}
							{state.activeSection.charAt(0).toUpperCase() +
								state.activeSection.slice(1)}
						</h5>
					</Card.Header>
					<Card.Body className={`text-primary`}>
						<Row className="row">
							<Col sm={3}>
								<div className="d-flex flex-column">
									<Button
										className="mb-2"
										variant="primary"
										onClick={() =>
											dispatch({ type: "SET_ACTIVE_TYPE", payload: "video" })
										}
									>
										Add Video
									</Button>
									<Button
										className="mb-2"
										variant="primary"
										onClick={() =>
											dispatch({ type: "SET_ACTIVE_TYPE", payload: "audio" })
										}
									>
										Add Audio
									</Button>
									<Button
										className="mb-2"
										variant="primary"
										onClick={() => {
											dispatch({
												type: "SET_SHOW_TEXT_EDITOR",
												payload: true,
											});
										}}
									>
										Add Text
									</Button>
									<Button
										className="mb-2"
										variant="primary"
										onClick={() =>
											dispatch({ type: "SET_ACTIVE_TYPE", payload: "pdf" })
										}
									>
										Add PDF
									</Button>
									<Button
										className="mb-2"
										variant="primary"
										onClick={() =>
											dispatch({ type: "SET_ACTIVE_TYPE", payload: "image" })
										}
									>
										Add Image
									</Button>
								</div>
								<Button
									className="m-2"
									onClick={submitLevleHandler}
									disabled={isSubmitting}
								>
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
										"Save"
									)}
								</Button>
							</Col>
							<Col sm={9}>
								{state.activeType ? (
									<Card className={`custom-card`}>
										<Card.Header className="d-flex custom-card-header border-bottom-0">
											<h5 className="card-title mb-0">
												{state.activeType.charAt(0).toUpperCase() +
													state.activeType.slice(1)}
											</h5>
											<div className="card-options">
												<div
													className="btn btn-secondary btn-sm ms-2"
													onClick={() =>
														dispatch({
															type: "RESET",
														})
													}
												>
													Reset
												</div>
											</div>
										</Card.Header>
										<Card.Body className={`text-primary`}>
											{state.activeType !== "text" && (
												<Form>
													<Form.Group>
														<Form.Label>Upload {state.activeType}</Form.Label>
														<div
															{...getRootProps()}
															className={`border-dashed border-2 p-4 rounded-md ${
																isDragActive ? "bg-gray-200" : "bg-white"
															}`}
														>
															<input {...getInputProps()} />
															{isDragActive ? (
																<p>Drop the {state.activeType} here...</p>
															) : (
																<p>
																	Drag 'n' drop a {state.activeType} file here,
																	or click to select one
																</p>
															)}
														</div>
													</Form.Group>
													<Form.Group
														className="mb-3"
														controlId="formTotalPoints"
													>
														<Form.Label>Total Points</Form.Label>
														<Form.Control
															type="number"
															placeholder="Enter total points"
															name="totalPoints"
															value={
																state[
																	`uploaded${
																		state.activeType.charAt(0).toUpperCase() +
																		state.activeType.slice(1)
																	}`
																]?.points || ""
															}
															onChange={(e) =>
																dispatch({
																	type: "SET_POINTS",
																	payload: e.target.value,
																})
															}
														/>
													</Form.Group>
												</Form>
											)}
											{state.showTextEditor && (
												<Modal
													show={state.showTextEditor}
													onHide={() =>
														dispatch({
															type: "SET_SHOW_TEXT_EDITOR",
															payload: false,
														})
													}
												>
													<Modal.Header closeButton>
														<Modal.Title>Edit Text</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														<SunEditor
															setContents={value}
															onChange={setValue}
															setOptions={{
																buttonList: [
																	["undo", "redo"],
																	["font", "fontSize"],
																	["paragraphStyle", "blockquote"],
																	[
																		"bold",
																		"underline",
																		"italic",
																		"strike",
																		"subscript",
																		"superscript",
																	],
																	["fontColor", "hiliteColor"],
																	["align", "list", "lineHeight"],
																	["outdent", "indent"],
																	[
																		"table",
																		"horizontalRule",
																		"link",
																		"image",
																		"video",
																	],
																	["preview", "print"],
																	["removeFormat"],
																],
																defaultTag: "div",
																minHeight: "300px",
																showPathLabel: false,
																attributesWhitelist: {
																	all: "style",
																	table:
																		"cellpadding|width|cellspacing|height|style",
																	tr: "valign|style",
																	td: "styleinsert|height|style",
																	img: "title|alt|src|style",
																},
															}}
														/>
													</Modal.Body>
													<Modal.Footer>
														<Button
															variant="secondary"
															onClick={() =>
																dispatch({
																	type: "SET_SHOW_TEXT_EDITOR",
																	payload: false,
																})
															}
														>
															Close
														</Button>
														<Button
															variant="primary"
															onClick={() => {
																dispatch({
																	type: "SET_TEXT",
																	payload: value,
																});

																dispatch({
																	type: "SET_SHOW_TEXT_EDITOR",
																	payload: false,
																});
															}}
														>
															Save Changes
														</Button>
													</Modal.Footer>
												</Modal>
											)}

											<div className="mt-3">
												{state.uploadedVideo.base64 &&
													state.activeType === "video" && (
														<>
															<video controls>
																<source
																	src={state.uploadedVideo.base64}
																	type={state.uploadedVideo.file.type}
																/>
															</video>
															<div className="mt-4">
																File Size :{" "}
																{state.uploadedVideo &&
																	formatBytes(state.uploadedVideo.file.size)}
															</div>
														</>
													)}
												{state.uploadedAudio.base64 &&
													state.activeType === "audio" && (
														<>
															<audio controls>
																<source
																	src={state.uploadedAudio.base64}
																	type={state.uploadedAudio.file.type}
																/>
															</audio>
															<div className="mt-4">
																File Size :{" "}
																{state.uploadedAudio &&
																	formatBytes(state.uploadedAudio.file.size)}
															</div>
														</>
													)}
												{state.uploadedPdf.base64 &&
													state.activeType === "pdf" && (
														<>
															<iframe
																src={state.uploadedPdf.base64}
																width="100%"
																height="600px"
															/>
															<div className="mt-4">
																File Size :{" "}
																{state.uploadedPdf &&
																	formatBytes(state.uploadedPdf.file.size)}
															</div>
														</>
													)}
												{state.uploadedImage.base64 &&
													state.activeType === "image" && (
														<>
															<img
																src={state.uploadedImage.base64}
																alt="Preview"
																className="img-fluid"
															/>
															<div className="mt-4">
																File Size :{" "}
																{state.uploadedImage &&
																	formatBytes(state.uploadedImage.file.size)}
															</div>
														</>
													)}
												{state.text && state.activeType === "text" && (
													<div className="mt-3">
														<h5>Text Preview:</h5>
														<p>
															<center>
																<span
																	dangerouslySetInnerHTML={{
																		__html: state.text,
																	}}
																/>
															</center>
														</p>
													</div>
												)}
											</div>
										</Card.Body>
									</Card>
								) : (
									<p>Select Section Type To Upload</p>
								)}
							</Col>
						</Row>
					</Card.Body>
				</Card>
			)}
			{state.activeSection === "Five" && <Quiz chapterId={chapter._id} />}
		</div>
	);
};

export default Chapters;
