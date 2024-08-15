import { Button, Card, Col, Form, Row, Modal } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import SunEditor from "suneditor-react";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const Diplomas = () => {
	const [activeSection, setActiveSection] = useState("1");
	const [activeType, setActiveType] = useState(null);
	const [uploadedFile, setUploadedFile] = useState(null);
	const [text, setText] = useState("");
	const [showTextEditor, setShowTextEditor] = useState(false);

	const htmlWithTableImages = "<center>  </center>";
	// Editor
	const [value, setValue] = useState(htmlWithTableImages);

	const handleButtonClick = (type) => {
		setActiveType(type);
		if (type === "text") {
			setShowTextEditor(true);
		}
	};

	// const handleFileUpload = (event) => {
	// 	const file = event.target.files[0];
	// 	if (file) {
	// 		setUploadedFile(URL.createObjectURL(file));
	// 	}
	// };

	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	const handleTextEditorClose = () => {
		setShowTextEditor(false);
	};

	const handleFileUpload = (acceptedFiles) => {
		if (acceptedFiles && acceptedFiles.length > 0) {
			const file = acceptedFiles[0];

			const reader = new FileReader();
			reader.onloadend = () => {
				const base64String = reader.result;
				console.log(base64String);
			};

			reader.readAsDataURL(file);
		}
	};

	const onDrop = useCallback((acceptedFiles) => {
		handleFileUpload(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept:
			activeType === "video"
				? "video/*"
				: activeType === "audio"
				? "audio/*"
				: activeType === "pdf"
				? "application/pdf"
				: activeType === "image"
				? "image/*"
				: "*",
	});

	return (
		<div className="m-4">
			<Pageheader title="Diplomas" heading="Main Menu" active="Diplomas" />

			<Row className="row">
				<Col sm={12}>
					<Card className={`card-primary`}>
						<Card.Header className=" pb-0">
							<h5 className="card-title mb-0 pb-0">Card Title</h5>
						</Card.Header>
						<Card.Body className={`text-primary`}>
							BLA BLA BLA BLA BLA BLA
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row className="mb-4">
				<Col sm={12}>
					<Button
						className="me-2"
						variant="primary"
						onClick={() => setActiveSection("1")}
						disabled={activeSection !== "1"}
					>
						1
					</Button>
					<Button
						className="me-2"
						variant="primary"
						onClick={() => setActiveSection("2")}
						disabled={activeSection !== "2"}
					>
						2
					</Button>
					<Button
						className="me-2"
						variant="primary"
						onClick={() => setActiveSection("3")}
						disabled={activeSection !== "3"}
					>
						3
					</Button>
					<Button
						className="me-2"
						variant="primary"
						onClick={() => setActiveSection("4")}
						disabled={activeSection !== "4"}
					>
						4
					</Button>
					<Button
						variant="primary"
						onClick={() => setActiveSection("5")}
						disabled={activeSection !== "5"}
					>
						5
					</Button>
				</Col>
			</Row>

			{activeSection && (
				<Card className={`card-primary`}>
					<Card.Header className="pb-0">
						<h5 className="card-title mb-0 pb-0">
							{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
						</h5>
					</Card.Header>
					<Card.Body className={`text-primary`}>
						<Row className="row">
							<Col sm={3}>
								<div className="d-flex flex-column">
									<Button
										className="mb-2"
										variant="primary"
										onClick={() => handleButtonClick("video")}
									>
										Add Video
									</Button>
									<Button
										className="mb-2"
										variant="primary"
										onClick={() => handleButtonClick("audio")}
									>
										Add Audio
									</Button>
									<Button
										className="mb-2"
										variant="primary"
										onClick={() => handleButtonClick("text")}
									>
										Add Text
									</Button>
									<Button
										className="mb-2"
										variant="primary"
										onClick={() => handleButtonClick("pdf")}
									>
										Add PDF
									</Button>
									<Button
										className="mb-2"
										variant="primary"
										onClick={() => handleButtonClick("image")}
									>
										Add Image
									</Button>
								</div>
							</Col>
							<Col sm={9}>
								{activeType && (
									<Card className={`custom-card`}>
										<Card.Header className="d-flex custom-card-header border-bottom-0">
											<h5 className="card-title mb-0 pb-0">
												{activeType.charAt(0).toUpperCase() +
													activeType.slice(1)}
											</h5>
											<div className="card-options">
												<Link to="#" className="btn btn-secondary btn-sm ms-2">
													Reset
												</Link>
											</div>
										</Card.Header>
										<Card.Body className={`text-primary`}>
											<Form>
												<Form.Group>
													<Form.Label>Upload {activeType}</Form.Label>
													<div
														{...getRootProps()}
														className={`border-dashed border-2 p-4 rounded-md ${
															isDragActive ? "bg-gray-200" : "bg-white"
														}`}
													>
														<input {...getInputProps()} />
														{isDragActive ? (
															<p>Drop the {activeType} here...</p>
														) : (
															<p>
																Drag 'n' drop a {activeType} file here, or click
																to select one
															</p>
														)}
													</div>
												</Form.Group>
											</Form>
											{activeType === "text" && (
												<Modal
													show={showTextEditor}
													onHide={handleTextEditorClose}
												>
													<Modal.Header closeButton>
														<Modal.Title>Edit Text</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														{/* <Form>
															<Form.Group controlId="formText">
																<Form.Label>Enter your text</Form.Label>
																<Form.Control
																	as="textarea"
																	rows={3}
																	value={text}
																	onChange={handleTextChange}
																/>
															</Form.Group>
														</Form> */}

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
															onClick={handleTextEditorClose}
														>
															Close
														</Button>
														<Button
															variant="primary"
															onClick={() => {
																setUploadedFile(null);
																handleTextEditorClose();
															}}
														>
															Save Changes
														</Button>
													</Modal.Footer>
												</Modal>
											)}
											{uploadedFile && activeType !== "text" && (
												<div className="mt-3">
													{activeType === "video" && (
														<video controls src={uploadedFile} width="100%" />
													)}
													{activeType === "audio" && (
														<audio controls src={uploadedFile} />
													)}
													{activeType === "pdf" && (
														<iframe
															src={uploadedFile}
															width="100%"
															height="600px"
														/>
													)}
													{activeType === "image" && (
														<img
															src={uploadedFile}
															alt="Preview"
															className="img-fluid"
														/>
													)}
												</div>
											)}
											{activeType === "text" && text && (
												<div className="mt-3">
													<h5>Text Preview:</h5>
													<p>{text}</p>
												</div>
											)}
										</Card.Body>
										<Card.Footer>File Size</Card.Footer>
									</Card>
								)}
							</Col>
						</Row>
					</Card.Body>
				</Card>
			)}
		</div>
	);
};

export default Diplomas;

<Col sm={12} md={12} lg={4} xl={4}>
	<Card className=" custom-card">
		<Card.Header className="d-flex custom-card-header border-bottom-0 ">
			<h5 className="card-title">Basic Card</h5>
			<div className="card-options">
				<Link to="#" className="btn btn-primary btn-sm">
					Action 1
				</Link>
				<Link to="#" className="btn btn-secondary btn-sm ms-2">
					Action 2
				</Link>
			</div>
		</Card.Header>
		<Card.Body>
			Et harum quidem rerum facilis est et expedita distinctio. Nam libero
			tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
			minus id quod maxime placeat facere
		</Card.Body>
		<Card.Footer className="">This is Basic card footer</Card.Footer>
	</Card>
</Col>;
