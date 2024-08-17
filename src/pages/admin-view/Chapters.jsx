//  import { Button, Card, Col, Form, Row, Modal } from "react-bootstrap";
//  import Pageheader from "../../layout/layoutcomponent/pageheader";
//  import SunEditor from "suneditor-react";
//  import { useCallback, useEffect, useState } from "react";
//  import { Link, useParams } from "react-router-dom";
//  import { useDropzone } from "react-dropzone";
//  import { useSelector } from "react-redux";

//  const Chapters = () => {
// 	const chapter = useSelector((state) => state.chapter.chapter);

// 	const [activeSection, setActiveSection] = useState("One");
// 	const [activeType, setActiveType] = useState(null);

// 	const [uploadedVideo, setUploadedVideo] = useState({
// 		file: null,
// 		base64: null,
// 	});

// 	const [uploadedAudio, setUploadedAudio] = useState({
// 		file: null,
// 		base64: null,
// 	});

// 	const [uploadedPdf, setUploadedPdf] = useState({
// 		file: null,
// 		base64: null,
// 	});

// 	const [uploadedImage, setUploadedImage] = useState({
// 		file: null,
// 		base64: null,
// 	});

// 	const [text, setText] = useState("");
// 	const [showTextEditor, setShowTextEditor] = useState(false);

// 	const htmlWithTableImages = "<center>  </center>";

// 	const [value, setValue] = useState(htmlWithTableImages);

// 	const handleTextEditorClose = () => {
// 		setShowTextEditor(false);
// 	};

// 	const handleFileUpload = (acceptedFiles) => {
// 		if (acceptedFiles && acceptedFiles.length > 0) {
// 			const file = acceptedFiles[0];

// 			const reader = new FileReader();
// 			reader.onloadend = () => {
// 				const base64String = reader.result;

// 				switch (activeType) {
// 					case "video":
// 						setUploadedVideo({
// 							file: file,
// 							base64: base64String,
// 						});
// 						break;

// 					case "audio":
// 						setUploadedAudio({
// 							file: file,
// 							base64: base64String,
// 						});
// 						break;

// 					case "pdf":
// 						setUploadedPdf({
// 							file: file,
// 							base64: base64String,
// 						});
// 						break;

// 					case "image":
// 						setUploadedImage({
// 							file: file,
// 							base64: base64String,
// 						});
// 						break;
// 				}
// 			};

// 			reader.readAsDataURL(file);
// 			console.log(file);
// 		}
// 	};

// 	const onDrop = useCallback((acceptedFiles) => {
// 		handleFileUpload(acceptedFiles);
// 	}, []);

// 	const { getRootProps, getInputProps, isDragActive } = useDropzone({
// 		onDrop,
// 		accept:
// 			activeType === "video"
// 				? "video/*"
// 				: activeType === "audio"
// 				? "audio/*"
// 				: activeType === "pdf"
// 				? "application/pdf"
// 				: activeType === "image"
// 				? "image/*"
// 				: "*",
// 	});

// 	const countSize = (files) => {
// 		const fileSizes = files.reduce((cur, acc) => {
// 			return cur + (acc?.file?.size || 0);
// 		}, 0);
// 		return fileSizes;
// 	};
// 	const submitLevleHandler = () => {
// 		const levelFormate = {
// 			level: activeSection,
// 			video: uploadedVideo.base64,
// 			audio: uploadedAudio.base64,
// 			image: uploadedImage.base64,
// 			pdf: uploadedPdf.base64,
// 			text,
// 			points: 60,
// 		};

// 		console.log(
// 			countSize([uploadedVideo, uploadedAudio, uploadedImage, uploadedPdf])
// 		);
// 		console.log(levelFormate);
// 	};

// 	useEffect(() => {
// 		console.log("Active type updated to:", activeType);
// 	}, [activeType]);

// 	return (
// 		<div className="m-4 position-relative">
// 			<Pageheader title="Chapters" heading="Main Menu" active="Chapters" />

// 			{chapter && (
// 				<Row className="row">
// 					<Col sm={6}>
// 						<Card className={`card-primary`}>
// 							<Card.Header className=" pb-0">
// 								<h5 className="card-title mb-0 pb-0">{chapter.title}</h5>
// 							</Card.Header>
// 							<Card.Body className={`text-primary`}>
// 								{/* {chapter.description} */}
// 							</Card.Body>
// 						</Card>
// 					</Col>
// 				</Row>
// 			)}
// 			<Row className="mb-4">
// 				<Col sm={12}>
// 					<Button
// 						className="me-2"
// 						variant="primary"
// 						onClick={() => setActiveSection("One")}
// 						disabled={activeSection !== "One"}
// 					>
// 						One
// 					</Button>
// 					<Button
// 						className="me-2"
// 						variant="primary"
// 						onClick={() => setActiveSection("Two")}
// 						disabled={activeSection !== "Two"}
// 					>
// 						Two
// 					</Button>
// 					<Button
// 						className="me-2"
// 						variant="primary"
// 						onClick={() => setActiveSection("Three")}
// 						disabled={activeSection !== "Three"}
// 					>
// 						Three
// 					</Button>
// 					<Button
// 						className="me-2"
// 						variant="primary"
// 						onClick={() => setActiveSection("Four")}
// 						disabled={activeSection !== "Four"}
// 					>
// 						Four
// 					</Button>
// 					<Button
// 						variant="primary"
// 						onClick={() => setActiveSection("Five")}
// 						disabled={activeSection !== "Five"}
// 					>
// 						Five
// 					</Button>
// 				</Col>
// 			</Row>

// 			{activeSection && (
// 				<Card className={`card-primary`}>
// 					<Card.Header className="pb-0">
// 						<h5 className="card-title mb-0 pb-0">
// 							Level{" "}
// 							{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
// 						</h5>
// 					</Card.Header>
// 					<Card.Body className={`text-primary`}>
// 						<Row className="row">
// 							<Col sm={3}>
// 								<div className="d-flex flex-column">
// 									<Button
// 										className="mb-2"
// 										variant="primary"
// 										onClick={() => setActiveType("video")}
// 									>
// 										Add Video
// 									</Button>
// 									<Button
// 										className="mb-2"
// 										variant="primary"
// 										onClick={() => setActiveType("audio")}
// 									>
// 										Add Audio
// 									</Button>
// 									<Button
// 										className="mb-2"
// 										variant="primary"
// 										onClick={() => setShowTextEditor(true)}
// 									>
// 										Add Text
// 									</Button>
// 									<Button
// 										className="mb-2"
// 										variant="primary"
// 										onClick={() => setActiveType("pdf")}
// 									>
// 										Add PDF
// 									</Button>
// 									<Button
// 										className="mb-2"
// 										variant="primary"
// 										onClick={() => setActiveType("image")}
// 									>
// 										Add Image
// 									</Button>
// 								</div>
// 								<Button className="m-2 r-0" onClick={submitLevleHandler}>
// 									Save
// 								</Button>
// 							</Col>
// 							<Col sm={9}>
// 								{activeType ? (
// 									<Card className={`custom-card`}>
// 										<Card.Header className="d-flex custom-card-header border-bottom-0">
// 											<h5 className="card-title mb-0 pb-0">
// 												{activeType.charAt(0).toUpperCase() +
// 													activeType.slice(1)}
// 											</h5>
// 											<div className="card-options">
// 												<Link to="#" className="btn btn-secondary btn-sm ms-2">
// 													Reset
// 												</Link>
// 											</div>
// 										</Card.Header>
// 										<Card.Body className={`text-primary`}>
// 											{activeType !== "text" && (
// 												<Form>
// 													<Form.Group>
// 														<Form.Label>Upload {activeType}</Form.Label>
// 														<div
// 															{...getRootProps()}
// 															className={`border-dashed border-2 p-4 rounded-md ${
// 																isDragActive ? "bg-gray-200" : "bg-white"
// 															}`}
// 														>
// 															<input {...getInputProps()} />
// 															{isDragActive ? (
// 																<p>Drop the {activeType} here...</p>
// 															) : (
// 																<p>
// 																	Drag 'n' drop a {activeType} file here, or
// 																	click to select one
// 																</p>
// 															)}
// 														</div>
// 													</Form.Group>
// 												</Form>
// 											)}
// 											{activeType === "text" && (
// 												<Modal
// 													show={showTextEditor}
// 													onHide={handleTextEditorClose}
// 												>
// 													<Modal.Header closeButton>
// 														<Modal.Title>Edit Text</Modal.Title>
// 													</Modal.Header>
// 													<Modal.Body>
// 														<SunEditor
// 															setContents={value}
// 															onChange={setValue}
// 															setOptions={{
// 																buttonList: [
// 																	["undo", "redo"],
// 																	["font", "fontSize"],
// 																	["paragraphStyle", "blockquote"],
// 																	[
// 																		"bold",
// 																		"underline",
// 																		"italic",
// 																		"strike",
// 																		"subscript",
// 																		"superscript",
// 																	],
// 																	["fontColor", "hiliteColor"],
// 																	["align", "list", "lineHeight"],
// 																	["outdent", "indent"],
// 																	[
// 																		"table",
// 																		"horizontalRule",
// 																		"link",
// 																		"image",
// 																		"video",
// 																	],
// 																	["preview", "print"],
// 																	["removeFormat"],
// 																],
// 																defaultTag: "div",
// 																minHeight: "300px",
// 																showPathLabel: false,
// 																attributesWhitelist: {
// 																	all: "style",
// 																	table:
// 																		"cellpadding|width|cellspacing|height|style",
// 																	tr: "valign|style",
// 																	td: "styleinsert|height|style",
// 																	img: "title|alt|src|style",
// 																},
// 															}}
// 														/>
// 													</Modal.Body>
// 													<Modal.Footer>
// 														<Button
// 															variant="secondary"
// 															onClick={handleTextEditorClose}
// 														>
// 															Close
// 														</Button>
// 														<Button
// 															variant="primary"
// 															onClick={() => {
// 																setUploadedFile(null);
// 																setText(value);
// 																handleTextEditorClose();
// 															}}
// 														>
// 															Save Changes
// 														</Button>
// 													</Modal.Footer>
// 												</Modal>
// 											)}

// 											<div className="mt-3">
// 												{uploadedVideo.base64 && activeType === "video" && (
// 													<>
// 														<video controls>
// 															<source
// 																src={uploadedVideo.base64}
// 																type={uploadedVideo.file.type}
// 															/>
// 														</video>
// 														<div className="mt-4">
// 															File Size :{" "}
// 															{uploadedVideo && uploadedVideo.file.size}
// 														</div>
// 													</>
// 												)}
// 												{uploadedAudio.base64 && activeType === "audio" && (
// 													<>
// 														<audio controls>
// 															<source
// 																src={uploadedAudio.base64}
// 																type={uploadedAudio.file.type}
// 															/>
// 														</audio>
// 														<div className="mt-4">
// 															File Size :{" "}
// 															{uploadedAudio && uploadedAudio.file.size}
// 														</div>
// 													</>
// 												)}
// 												{uploadedPdf.base64 && activeType === "pdf" && (
// 													<>
// 														<iframe
// 															src={uploadedPdf.base64}
// 															width="100%"
// 															height="600px"
// 														/>
// 														<div className="mt-4">
// 															File Size : {uploadedPdf && uploadedPdf.file.size}
// 														</div>
// 													</>
// 												)}
// 												{uploadedImage.base64 && activeType === "image" && (
// 													<>
// 														<img
// 															src={uploadedImage.base64}
// 															alt="Preview"
// 															className="img-fluid"
// 														/>
// 														<div className="mt-4">
// 															File Size :{" "}
// 															{uploadedImage && uploadedImage.file.size}
// 														</div>
// 													</>
// 												)}
// 												{text && activeType === "text" && (
// 													<div className="mt-3">
// 														<h5>Text Preview:</h5>
// 														<p>
// 															<center>{text}</center>
// 														</p>
// 													</div>
// 												)}
// 											</div>
// 										</Card.Body>
// 									</Card>
// 								) : (
// 									<p>Select Type To Upload</p>
// 								)}
// 							</Col>
// 						</Row>
// 					</Card.Body>
// 				</Card>
// 			)}
// 		</div>
// 	);
// };

// export default Chapters;

// // <Col sm={12} md={12} lg={4} xl={4}>
// // 	<Card className=" custom-card">
// // 		<Card.Header className="d-flex custom-card-header border-bottom-0 ">
// // 			<h5 className="card-title">Basic Card</h5>
// // 			<div className="card-options">
// // 				<Link to="#" className="btn btn-primary btn-sm">
// // 					Action 1
// // 				</Link>
// // 				<Link to="#" className="btn btn-secondary btn-sm ms-2">
// // 					Action 2
// // 				</Link>
// // 			</div>
// // 		</Card.Header>
// // 		<Card.Body>
// // 			Et harum quidem rerum facilis est et expedita distinctio. Nam libero
// // 			tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
// // 			minus id quod maxime placeat facere
// // 		</Card.Body>
// // 		<Card.Footer className="">This is Basic card footer</Card.Footer>
// // 	</Card>
// // </Col>;

import { Button, Card, Col, Form, Row, Modal } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import SunEditor from "suneditor-react";
import { useCallback, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { addLevelToChapter } from "../../api/admin/chapter";

const initialState = {
	activeSection: "One",
	activeType: null,
	uploadedVideo: { file: null, base64: null },
	uploadedAudio: { file: null, base64: null },
	uploadedPdf: { file: null, base64: null },
	uploadedImage: { file: null, base64: null },
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
		case "SET_TEXT":
			return { ...state, text: action.payload };
		case "SET_SHOW_TEXT_EDITOR":
			return { ...state, showTextEditor: action.payload };
		case "RESET":
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
						data: { file, base64: base64String },
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
		const levelFormat = {
			level: state.activeSection,
			video: state.uploadedVideo.base64,
			audio: state.uploadedAudio.base64,
			image: state.uploadedImage.base64,
			pdf: state.uploadedPdf.base64,
			text: state.text,
			points: 60,
		};

		const response = await addLevelToChapter(chapter._id, levelFormat);

		reduxDispatch({
			type: "open",
			payload: { message: response.data.message },
		});
		dispatch({ type: "RESET" });

		const nextSection = getNextSection(state.activeSection);
		console.log("next section", nextSection);
		if (nextSection) {
			dispatch({ type: "SET_SECTION", payload: nextSection });
		} else {
			navigate("/admin/diplomas");
		}
	};

	useEffect(() => {
		console.log("Active type updated to:", state.activeType);
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

			{state.activeSection && (
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
										onClick={() =>
											dispatch({ type: "SET_SHOW_TEXT_EDITOR", payload: true })
										}
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
								<Button className="m-2" onClick={submitLevleHandler}>
									Save
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
													onClick={() => dispatch({ type: "RESET" })}
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
												</Form>
											)}
											{state.activeType === "text" && (
												<Modal
													show={state.showTextEditor}
													onHide={dispatch({
														type: "SET_SHOW_TEXT_EDITOR",
														payload: false,
													})}
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
															onClick={dispatch({
																type: "SET_SHOW_TEXT_EDITOR",
																payload: false,
															})}
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
																	state.uploadedVideo.file.size}
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
																	state.uploadedAudio.file.size}
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
																	state.uploadedPdf.file.size}
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
																	state.uploadedImage.file.size}
															</div>
														</>
													)}
												{state.text && state.activeType === "text" && (
													<div className="mt-3">
														<h5>Text Preview:</h5>
														<p>
															<center>{state.text}</center>
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
		</div>
	);
};

export default Chapters;
