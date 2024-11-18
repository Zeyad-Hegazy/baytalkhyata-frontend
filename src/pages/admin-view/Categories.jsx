import { Button, Card, Col, Modal, Row, Form, Spinner } from "react-bootstrap";
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

	const [loadingCategories, setLoadingCategories] = useState(false);
	const [loadingItems, setLoadingItems] = useState(false);

	const [itemState, setItemState] = useState({
		title: "",
		price: "",
		image: "",
	});

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCategories = async () => {
			setLoadingCategories(true);
			try {
				const response = await getCategories();
				dispatch({ type: "GET_CATEGORYIES", payload: response.data.result });
				if (response.data.result.length > 0) {
					setSelectedCategory(response.data.result[0]._id);
				}
			} catch (error) {
				console.error("Error fetching categories:", error);
			} finally {
				setLoadingCategories(false);
			}
		};
		fetchCategories();
	}, [dispatch]);

	useEffect(() => {
		const fetchItems = async () => {
			if (selectedCategory) {
				setLoadingItems(true);
				try {
					const response = await getCategoryItems(selectedCategory);
					dispatch({
						type: "GET_CATEGORY_ITEMS",
						payload: response.data.result,
					});
				} catch (error) {
					console.error("Error fetching category items:", error);
				} finally {
					setLoadingItems(false);
				}
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
						{loadingCategories ? (
							<div className="text-center my-5">
								<Spinner animation="border" variant="primary" />
								<p className="mt-2">Loading...</p>
							</div>
						) : categories.length > 0 ? (
							categories.map((category) => (
								<Button
									key={category._id}
									variant={
										selectedCategory === category._id
											? "primary"
											: "outline-primary"
									}
									style={{ width: "9rem", marginRight: "1rem" }}
									onClick={() => setSelectedCategory(category._id)}
									disabled={selectedCategory === category._id}
								>
									{category.title}
								</Button>
							))
						) : (
							<Card>
								<Card.Body>
									<p className="text-center text-primary">No data available</p>
								</Card.Body>
							</Card>
						)}
					</Col>
				</Row>

				<div className="mb-2 mt-4">
					<Button onClick={() => setShowItemModal(true)}>
						Add Category Item
					</Button>
				</div>

				<Row className="row">
					{loadingItems ? (
						<div className="text-center my-5">
							<Spinner animation="border" variant="primary" />
							<p className="mt-2">Loading...</p>
						</div>
					) : categoryItems.length > 0 ? (
						categoryItems.map((item) => (
							<Col xl={3} lg={6} md={4} key={item.id}>
								<Card className="item-card">
									<Card.Body>
										<img
											className="w-100 br-5"
											src={item.image}
											alt={item.title}
										/>
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
