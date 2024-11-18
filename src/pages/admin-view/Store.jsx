/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useState, Fragment, useEffect } from "react";
import {
	Breadcrumb,
	Col,
	Pagination,
	Row,
	Card,
	Button,
	Modal,
	Form,
	Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, Delete } from "../../common/redux/action";
import ProductService from "../../common/ProductService";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import {
	getGifts,
	createGift,
	updateGift,
	deleteGift,
	giftProductToStudent,
} from "../../api/admin/store";
import { getStudents } from "../../api/admin/students";

const Store = () => {
	const [showModal, setShowModal] = useState(false);
	const [showAssignModal, setShowAssignModal] = useState(false);
	const [students, setStudents] = useState([]);
	const [selectedProductId, setSelectedProductId] = useState(null);
	const [newItemTitle, setNewItemTitle] = useState("");
	const [newItemBase64, setNewItemBase64] = useState("");
	const [newItemPoints, setNewItemPoints] = useState("");
	const [confirmDeleteShow, setConfirmDeleteShow] = useState(false);
	const [deleteItemId, setDeleteItemId] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const [editItemId, setEditItemId] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const dispatch = useDispatch();
	const gifts = useSelector((state) => state.gifts);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getGifts();
				dispatch({ type: "GET_GIFTS", payload: response.data.result });
			} catch (error) {
				console.error("Error fetching chapter levels:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();

		const fetchStudents = async () => {
			const response = await getStudents();
			setStudents(response.data.result);
		};
		fetchStudents();
	}, [dispatch]);

	const handleClose = () => {
		setShowModal(false);
		setNewItemTitle("");
		setNewItemBase64(null);
		setIsEdit(false);
		setEditItemId(null);
	};

	const addItemClick = () => {
		setShowModal(true);
		setIsEdit(false);
		setNewItemTitle("");
		setNewItemPoints("");
		setNewItemBase64(null);
	};

	const editItemClick = (item) => {
		setShowModal(true);
		setIsEdit(true);
		setEditItemId(item._id);
		setNewItemTitle(item.title);
		setNewItemPoints(item.points);
		setNewItemBase64("");
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
			const response = await updateGift(editItemId, {
				title: newItemTitle,
				points: newItemPoints,
				image: newItemBase64 === "" ? null : newItemBase64,
			});
			dispatch({ type: "UPT_GIFT", payload: response.data.result });
			dispatch({ type: "open", payload: { message: response.data.message } });
		} else {
			const response = await createGift({
				title: newItemTitle,
				points: newItemPoints,
				image: newItemBase64 === "" ? null : newItemBase64,
			});
			dispatch({ type: "ADD_GIFT", payload: response.data.result });
			dispatch({ type: "open", payload: { message: response.data.message } });
		}
		handleClose();
	};

	const handleDeleteClick = async () => {
		const response = await deleteGift(deleteItemId);
		dispatch({ type: "RMV_GIFT", payload: { id: deleteItemId } });
		dispatch({ type: "open", payload: { message: response.data.message } });
		setDeleteItemId(null);
		setConfirmDeleteShow(false);
	};

	const handleAssignClick = (productId) => {
		setSelectedProductId(productId);
		setShowAssignModal(true);
	};

	const handleAssignProduct = async (studentId) => {
		await giftProductToStudent(selectedProductId, { userId: studentId });
		setShowAssignModal(false);
	};

	return (
		<Fragment>
			<Pageheader title="Gift Store" heading="Main Menu" active="Gift Store" />

			<Col className="p-0" lg={12} xl={12}>
				<Button
					className="btn ripple btn-success ms-2 mb-4"
					type="button"
					onClick={addItemClick}
				>
					Add New Gift
				</Button>
				{isLoading ? (
					<div className="text-center my-5">
						<Spinner animation="border" variant="primary" />
						<p className="mt-2">Loading...</p>
					</div>
				) : (
					<Row className="row">
						{gifts.length > 0 ? (
							gifts.map((item) => (
								<Col xl={3} lg={6} md={4} className="alert" key={item.id}>
									<Card className=" item-card ">
										<Card.Body className="pb-0">
											<div className="text-center zoom">
												<div>
													<img
														className="w-100 br-5"
														src={item.image}
														alt={item.title}
													/>
												</div>
											</div>
											<Card.Body className=" px-0 pb-3">
												<Row>
													<div className="col-8">
														<div className="cardtitle">
															<div>
																{/* <Link to="#">
                              <i className="fa fa-star text-warning fs-16"></i>
                            </Link>
                            <Link to="#">
                              <i className="fa fa-star text-warning fs-16"></i>
                            </Link>
                            <Link to="#">
                              <i className="fa fa-star text-warning fs-16"></i>
                            </Link> */}
																{/* <Link to="#">
                              <i className="fa fa-star-half text-warning fs-16"></i>
                            </Link> */}
																{/* <Link to="#">
                              <i className="fa fa-star-o text-warning fs-16"></i>
                            </Link> */}
																{/* <Link to="#"> {item.num}</Link> */}
															</div>
															<div
																className="shop-title fs-18"
																style={{ fontSize: "2rem" }}
															>
																{item.title}
															</div>
														</div>
													</div>
													<div className="col-4">
														<div className="cardprice-2">
															<i className="fa fa-star text-warning fs-16"></i>
															<span className="number-font">{item.points}</span>
														</div>
													</div>
													<div>
														{/* <p className="shop-description fs-13 text-muted mt-2 mb-0">
                          {item.text}
                        </p> */}
													</div>
												</Row>
											</Card.Body>
										</Card.Body>
										<Card.Footer className=" text-center">
											<div className="text-center ">
												<Button
													variant=""
													className="btn btn-md btn-primary mb-2  w-50 "
													onClick={() => editItemClick(item)}
												>
													<i className="fe fe-shopping-cart me-2"></i> Edit Gift
												</Button>
												<Button
													variant="light"
													className="btn btn-md btn-light mb-2  w-50"
													data-bs-dismiss="alert"
													aria-label="Close"
													onClick={() => {
														setConfirmDeleteShow(true);
														setDeleteItemId(item._id);
													}}
												>
													<span className="me-2 fs-14">Remove</span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														height="16px"
														viewBox="0 0 24 24"
														width="16px"
														fill="#495057"
													>
														<path d="M0 0h24v24H0V0z" fill="none" />
														<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
													</svg>
												</Button>
												<Button
													variant="light"
													className="btn btn-md btn-light mb-2  w-100"
													data-bs-dismiss="alert"
													aria-label="Close"
													onClick={() => handleAssignClick(item._id)}
												>
													<span className="me-2 fs-14">Assign To Student</span>
												</Button>
											</div>
										</Card.Footer>
									</Card>
								</Col>
							))
						) : (
							<Col lg={12}>
								<Card>
									<p className="p-4 text-center text-primary">
										No data available
									</p>
								</Card>
							</Col>
						)}
					</Row>
				)}

				<div className="d-flex justify-content-end">
					<Pagination className="pagination mb-5">
						<Pagination.Item className="disabled page-item">‹</Pagination.Item>
						<Pagination.Item className="active page-item">1</Pagination.Item>
						<Pagination.Item className="page-item">2</Pagination.Item>
						<Pagination.Item className="page-item">3</Pagination.Item>
						<Pagination.Item className="page-item">4</Pagination.Item>
						<Pagination.Item className="page-item">5</Pagination.Item>
						<Pagination.Item className="page-item">›</Pagination.Item>
					</Pagination>
				</div>
			</Col>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{isEdit ? "Edit Gift" : "Add New Gift"}</Modal.Title>
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
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Points</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter Points"
								value={newItemPoints}
								onChange={(e) => setNewItemPoints(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formFile">
							<Form.Label>
								{isEdit ? "Replace Image" : "Upload Image"}
							</Form.Label>
							<Form.Control type="file" onChange={handleFileChange} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave}>
						{isEdit ? "Update Gift" : "Add Gift"}
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

			<Modal show={showAssignModal} onHide={() => setShowAssignModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Assign Product to Student</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formStudents">
							<Form.Label>Select Student</Form.Label>
							<Form.Control
								as="select"
								onChange={(e) => handleAssignProduct(e.target.value)}
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
		</Fragment>
	);
};
Store.propTypes = {};

Store.defaultProps = {};

export default Store;
