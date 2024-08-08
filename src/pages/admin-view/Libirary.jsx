/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import {
	Card,
	Col,
	Dropdown,
	Row,
	InputGroup,
	Form,
	Button,
	Modal,
} from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getPdfItems,
	getPdfFile,
	createPdfItem,
	deletePdfFile,
	updatePdfFile,
} from "../../api/admin/library";

const Library = () => {
	const dispatch = useDispatch();
	const pdfItems = useSelector((state) => state.library.libraryItems);
	const filteredItems = useSelector((state) => state.library.filteredItems);

	const [showModal, setShowModal] = useState(false);
	const [newItemTitle, setNewItemTitle] = useState("");
	const [newItemBase64, setNewItemBase64] = useState("");
	const [confirmDeleteShow, setConfirmDeleteShow] = useState(false);
	const [deleteItemId, setDeleteItemId] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const [editItemId, setEditItemId] = useState(null);

	const getPdfFileHandler = async (id) => {
		const response = await getPdfFile(id);
		if (response && response.data.pdfUrl) {
			window.open(response.data.pdfUrl, "_blank");
		} else {
			console.error("Failed to retrieve PDF file URL.");
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await getPdfItems();
			dispatch({ type: "GET_LIBITEMS", payload: response.data.result });
		};
		fetchData();
	}, [dispatch]);

	const myFunction = (idx) => {
		const userdata = [];
		for (const Data of pdfItems) {
			if (Data.title[0] === " ") {
				Data.title = Data.title.trim();
			}
			if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
				if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
					userdata.push(Data);
				}
			}
		}
		dispatch({ type: "SET_FILTERED_LIBITEMS", payload: userdata });
	};

	const addItemHandler = () => {
		setShowModal(true);
		setIsEdit(false);
		setNewItemTitle("");
		setNewItemBase64(null);
	};

	const editItemHandler = (item) => {
		setShowModal(true);
		setIsEdit(true);
		setEditItemId(item._id);
		setNewItemTitle(item.title);
		setNewItemBase64("");
	};

	const handleClose = () => {
		setShowModal(false);
		setNewItemTitle("");
		setNewItemBase64(null);
		setIsEdit(false);
		setEditItemId(null);
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64String = reader.result.replace(/^data:.+;base64,/, "");
			setNewItemBase64(base64String);
		};
		reader.readAsDataURL(file);
	};

	const handleSave = async () => {
		if (isEdit) {
			const response = await updatePdfFile(editItemId, {
				title: newItemTitle,
				pdf: newItemBase64 === "" ? null : newItemBase64,
			});
			dispatch({ type: "UPT_LIBITEM", payload: response.data.result });
			dispatch({ type: "open", payload: { message: response.data.message } });
		} else {
			const response = await createPdfItem({
				title: newItemTitle,
				pdf: newItemBase64 === "" ? null : newItemBase64,
			});
			dispatch({ type: "ADD_LIBITEM", payload: response.data.result });
			dispatch({ type: "open", payload: { message: response.data.message } });
		}
		handleClose();
	};

	const handleDeleteClick = async () => {
		const response = await deletePdfFile(deleteItemId);
		dispatch({ type: "RMV_LIBITEM", payload: { id: deleteItemId } });
		dispatch({ type: "open", payload: { message: response.data.message } });
		setDeleteItemId(null);
		setConfirmDeleteShow(false);
	};

	return (
		<Fragment>
			<Pageheader title="Library" heading="Main Menu" active="Library" />

			<Row>
				<Col lg={12} xl={12}>
					<Row>
						<div className="col-sm-6">
							<div className="tx-18 mb-4">Files</div>
						</div>
						<div className="col-sm-6 col-auto">
							<InputGroup className="input-group mb-2">
								<Form.Control
									type="text"
									className="form-control"
									placeholder="Search files....."
									onChange={(ele) => myFunction(ele.target.value)}
								/>
								<span className="input-group-append">
									<Button className="btn ripple btn-primary" type="button">
										Search
									</Button>
								</span>
							</InputGroup>
						</div>
					</Row>
					<Row>
						<Button
							className="btn ripple btn-success ms-2 mb-4"
							type="button"
							onClick={addItemHandler}
						>
							Add New PDF
						</Button>
					</Row>
					<Row>
						{pdfItems.length > 0 ? (
							pdfItems.map((item) => (
								<Col sm={6} xl={2} md={4} key={item._id}>
									{" "}
									{/* Use a unique property as key */}
									<Card className="p-0">
										<div className="d-flex align-items-center px-3 pt-3">
											<Dropdown className="float-end optiondots ms-auto">
												<Dropdown.Toggle variant="" className="option-dots">
													<i className="fe fe-more-vertical"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item
														href="#"
														className="d-inline-flex align-items-center"
														onClick={() => editItemHandler(item)}
													>
														<i className="fe fe-edit me-2"></i> Edit
													</Dropdown.Item>
													<Dropdown.Item
														href="#"
														className="d-inline-flex align-items-center"
														onClick={() => {
															setConfirmDeleteShow(true);
															setDeleteItemId(item._id);
														}}
													>
														<i className="fe fe-trash me-2"></i> Delete
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<Card.Body className="pt-0 text-center">
											<div className="file-manger-icon">
												<div
													style={{ cursor: "pointer", marginBottom: "1rem" }}
													onClick={() => getPdfFileHandler(item._id)}
												>
													<img
														src={item.image}
														alt={item.title}
														className="br-7"
													/>
												</div>
											</div>
											<h6 className="mb-1 font-weight-semibold">
												{item.title}
											</h6>
											<span>{item.size}</span>
										</Card.Body>
									</Card>
								</Col>
							))
						) : (
							<Col lg={12}>
								<Card>
									<p className="p-4">No data available</p>
								</Card>
							</Col>
						)}
					</Row>
					<ul className="pagination float-end mb-4">
						<li className="page-item page-prev disabled">
							<Link className="page-link" to="#" tabIndex="-1">
								Prev
							</Link>
						</li>
						<li className="page-item active">
							<Link className="page-link" to="#">
								1
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="#">
								2
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="#">
								3
							</Link>
						</li>
						<li className="page-item page-next">
							<Link className="page-link" to="#">
								Next
							</Link>
						</li>
					</ul>
				</Col>
			</Row>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{isEdit ? "Edit PDF" : "Add New PDF"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter title"
								value={newItemTitle}
								onChange={(e) => setNewItemTitle(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formFile">
							<Form.Label>{isEdit ? "Replace PDF" : "Upload PDF"}</Form.Label>
							<Form.Control type="file" onChange={handleFileChange} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave}>
						{isEdit ? "Update PDF" : "Add PDF"}
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
		</Fragment>
	);
};

export default Library;
