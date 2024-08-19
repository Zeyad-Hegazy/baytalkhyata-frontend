import { Button, Card, Col, Modal, Row, Form } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useEffect, useState } from "react";

import {
	createCategory,
	createCategoryItem,
	getCategories,
	getCategoryItems,
} from "../../api/admin/category";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
	const categories = useSelector((state) => state.categories);
	const categoryItems = useSelector((state) => state.categoryItems);

	const [showModal, setShowModal] = useState(false);
	const [showItemModal, setShowItemModal] = useState(false);
	const [categoryTitle, setCategoryTitle] = useState("");

	const [selectedCategory, setSelectedCategory] = useState(null);

	const [itemState, setItemState] = useState({
		title: "",
		price: "",
		image: "",
	});

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCategories = async () => {
			const response = await getCategories();
			dispatch({ type: "GET_CATEGORYIES", payload: response.data.result });
			if (response.data.result.length > 0) {
				setSelectedCategory(response.data.result[0]._id);
			}
		};
		fetchCategories();
	}, [dispatch]);

	useEffect(() => {
		const fetchItems = async () => {
			if (selectedCategory) {
				const response = await getCategoryItems(selectedCategory);
				console.log(response);
				dispatch({ type: "GET_CATEGORY_ITEMS", payload: response.data.result });
			}
		};
		fetchItems();
	}, [dispatch, selectedCategory]);

	const handleSaveCategory = async () => {
		const response = await createCategory({ title: categoryTitle });
		dispatch({ type: "ADD_CATEGORY", payload: response.data.result });
		dispatch({ type: "open", payload: { message: response.data.message } });
		setCategoryTitle("");
		setShowModal(false);
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			const base64String = reader.result.replace(/^data:.+;base64,/, "");
			setItemState((state) => ({ ...state, image: base64String }));
		};
		reader.readAsDataURL(file);
	};

	const handleSaveItem = async () => {
		const response = await createCategoryItem({
			title: itemState.title,
			price: itemState.price,
			image: itemState.image === "" ? null : itemState.image,
			category: selectedCategory,
		});
		dispatch({ type: "ADD_CATEGORY_ITEM", payload: response.data.result });
		dispatch({ type: "open", payload: { message: response.data.message } });

		setShowItemModal(false);
		setItemState({ title: "", price: "", image: "" });
	};

	return (
		<>
			<div className="m-4 position-relative">
				<Pageheader
					title="Categories"
					heading="Main Menu"
					active="Categories"
				/>

				<div className="mb-4">
					<Button onClick={() => setShowModal(true)}>
						<i className="fe fe-plus"></i>
					</Button>
				</div>

				<Row>
					<Col sm={12}>
						<div>
							{categories.length > 0 ? (
								categories.map((category) => (
									<Button
										key={category._id}
										variant={
											selectedCategory === category._id
												? "primary"
												: "outline-primary"
										}
										style={{
											width: "9rem",
											marginRight: "1rem",
										}}
										onClick={() => setSelectedCategory(category._id)}
										disabled={selectedCategory === category._id}
									>
										{category.title}
									</Button>
								))
							) : (
								<Card>
									<Card.Body>
										<p className="text-center text-primary">
											No data available
										</p>
									</Card.Body>
								</Card>
							)}
						</div>
					</Col>
				</Row>

				<div className="mb-2 mt-4">
					<Button onClick={() => setShowItemModal(true)}>
						Add Category Item
					</Button>
				</div>
				<Row className="row">
					{categoryItems.length > 0 ? (
						categoryItems.map((item) => (
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
										<Card.Body>
											<Row>
												<div className="col-8">
													<div className="cardtitle">
														<div
															className="shop-title fs-18"
															style={{ fontSize: "2rem" }}
														>
															{item.title}
														</div>
													</div>
												</div>
												<div className="col-4">
													<div className="cardprice-2 d-flex mt-2">
														<span className="text-primary">LE</span>{" "}
														<span className="number-font"> {item.price}</span>
													</div>
												</div>
												<div></div>
											</Row>
										</Card.Body>
									</Card.Body>
									{/* <Card.Footer className=" text-center">
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
									</Card.Footer> */}
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
			</div>

			<Modal
				show={showModal}
				onHide={() => {
					setCategoryTitle("");
					setShowModal(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>{"Add New Category"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSaveCategory}>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter title"
								name="title"
								value={categoryTitle}
								onChange={(e) => setCategoryTitle(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => {
							setCategoryTitle("");
							setShowModal(false);
						}}
					>
						Close
					</Button>
					<Button variant="primary" onClick={handleSaveCategory}>
						{"Add Category"}
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showItemModal} onHide={() => setShowItemModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>{"Add New Item"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSaveItem}>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter title"
								value={itemState.title}
								onChange={(e) =>
									setItemState((state) => ({ ...state, title: e.target.value }))
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter Price"
								value={itemState.price}
								onChange={(e) =>
									setItemState((state) => ({
										...state,
										price: +e.target.value,
									}))
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formFile">
							<Form.Label>{"Upload Image"}</Form.Label>
							<Form.Control type="file" onChange={handleFileChange} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowItemModal(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSaveItem}>
						{"Add Item"}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Categories;
