import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	addItemToLevel,
	getlevelSections,
	getSectionItem,
} from "../../api/admin/chapter";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";

const formatBytes = (bytes) => {
	const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	if (bytes === 0) return "0 Byte";
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return Math.round((bytes / Math.pow(1024, i)) * 10) / 10 + " " + sizes[i];
};

function removeBase64Prefix(base64String) {
	return base64String.replace(/^data:\w+\/[\w-]+;base64,/, "");
}

const ItemsPage = () => {
	const { levelId } = useParams();
	const [showModal, setShowModal] = useState(false);
	const [items, setItems] = useState([]);
	const [itemSectionOpend, setItemSectionOpned] = useState(false);
	const [itemSeciton, setItemSeciton] = useState(null);
	const [item, setItem] = useState({
		type: "",
		title: "",
		description: "",
		points: 0,
		fileBuffer: null,
		size: "",
	});
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchLevels = async () => {
			try {
				const response = await getlevelSections(levelId);
				setItems(response.data.result);
			} catch (error) {
				console.error("Error fetching chapter levels:", error);
			}
		};
		fetchLevels();
	}, [levelId]);

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

	const addItemToSection = async () => {
		try {
			const response = await addItemToLevel(levelId, { item });
			dispatch({
				type: "open",
				payload: { message: response.data.message },
			});
			setItems((prevState) => [...prevState, response.data.result]);
		} catch (error) {
			console.error("Submission failed", error);
		} finally {
			setItem({
				type: "",
				title: "",
				description: "",
				points: 0,
				fileBuffer: null,
				size: "",
			});
			setShowModal(false);
		}
	};

	return (
		<>
			<div className="m-4 position-relative">
				<Pageheader title="Items" heading="Main Menu" active="Levels" />

				<div className="mb-4">
					<Button onClick={() => setShowModal(true)}>Add Item</Button>
				</div>

				{items?.length > 0 ? (
					<Row className="row">
						{items.map((item) => (
							<Col sm={3} key={item._id}>
								<Card className="card-primary">
									<Card.Header
										className="pb-0"
										style={{ position: "relative" }}
									>
										<h5 className="card-title mb-0 pb-0">{item.title}</h5>
										<div
											className="d-flex align-items-center px-3 pt-3"
											style={{ position: "absolute", top: "-10px", right: "0" }}
										></div>
									</Card.Header>
									<Card.Body>
										{" "}
										<p>
											<strong>The {item.type}:</strong>{" "}
											<Button
												className="ms-3"
												onClick={async () => {
													try {
														const response = await getSectionItem(item._id);
														setItemSeciton(response.data.result);
														setItemSectionOpned(true);
													} catch (error) {
														console.error(
															"Error fetching chapter levels:",
															error
														);
													}
												}}
											>
												<i className="fa fa-solid fa-eye"></i>
											</Button>
										</p>
										<p>
											<strong>Description:</strong> {item.description}
										</p>
									</Card.Body>
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

			{itemSeciton && (
				<Modal
					show={itemSectionOpend}
					onHide={() => {
						setItemSectionOpned(false);
						setItemSeciton(null);
					}}
				>
					<Modal.Header closeButton>
						<Modal.Title>{itemSeciton.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							<strong>Description:</strong> {itemSeciton.description}
						</p>
						<p>
							<strong>Type:</strong> {itemSeciton.type}
						</p>
						<p>
							<strong>Size:</strong> {itemSeciton.size}
						</p>
						<p>
							<strong>Points:</strong> {itemSeciton.points}
						</p>

						<div className="mt-3">
							{itemSeciton.type === "video" && (
								<video controls width="100%">
									<source src={itemSeciton.file} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							)}
							{itemSeciton.type === "image" && (
								<img
									src={itemSeciton.file}
									alt={itemSeciton.title}
									style={{ width: "100%" }}
								/>
							)}
							{itemSeciton.type === "audio" && (
								<audio controls>
									<source src={itemSeciton.file} type="audio/mpeg" />
									Your browser does not support the audio element.
								</audio>
							)}
							{itemSeciton.type === "pdf" && (
								<a
									href={itemSeciton.file}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary"
								>
									View PDF
								</a>
							)}
						</div>
					</Modal.Body>
				</Modal>
			)}

			<Modal show={showModal} onHide={() => setShowModal(false)}>
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
					<Button variant="secondary" onClick={() => setShowModal(false)}>
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

export default ItemsPage;
