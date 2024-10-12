/* eslint-disable no-unused-vars */
import { Fragment, useCallback, useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { StudentTable } from "../../components/table/Savetable";
import { getStudents, createStudent } from "../../api/admin/students";
import { useDispatch, useSelector } from "react-redux";

const Students = () => {
	const students = useSelector((state) => state.students);
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);

	const [addFormData, setAddFormData] = useState({
		fullName: "",
		Password: "",
		phone: "",
		email: "",
	});

	const getAll = useCallback(async () => {
		const response = await getStudents();
		dispatch({ type: "GET_STUDENTS", payload: response.data.result });
	}, [dispatch]);

	useEffect(() => {
		const fetchData = async () => {
			await getAll();
		};
		fetchData();
	}, [getAll]);

	const handleAddFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...addFormData };
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	const handleAddFormSubmit = async (event) => {
		event.preventDefault();
		const response = await createStudent(addFormData);
		dispatch({ type: "ADD_STUDENT", payload: response.data.result });
		dispatch({ type: "open", payload: { message: response.data.message } });
		await getAll();
		setShowModal(false);
	};

	return (
		<Fragment>
			<Pageheader title="STUDENTS" heading="Main Menu" active="Students" />
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					<div className="main-container container-fluid">
						<Row>
							<Button
								className="btn ripple btn-success ms-2 mb-4"
								type="button"
								onClick={() => setShowModal(true)}
							>
								Add Student
							</Button>
						</Row>
						<Row className=" row-sm">
							<Col lg={12}>
								<Card className="custom-card">
									<Card.Body>
										<div className="table-responsive  deleted-table">
											{students.length > 0 ? (
												<StudentTable getAll={getAll} contacts={students} />
											) : (
												<p>No data available</p>
											)}
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>

			<Modal
				show={showModal}
				onHide={() => setShowModal(false)}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">
						Add New Student
					</Modal.Title>
					<Button
						variant=""
						className="btn btn-close"
						onClick={() => setShowModal(false)}
					>
						x
					</Button>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleAddFormSubmit} className="">
						<Form.Control
							type="text"
							name="fullName"
							required
							placeholder="full name"
							onChange={handleAddFormChange}
							className="form-control mb-2 border"
						/>
						<Form.Control
							type="text"
							name="phone"
							required
							placeholder="phone number"
							onChange={handleAddFormChange}
							className="form-control mb-2"
						/>
						<Form.Control
							type="email"
							name="email"
							required
							placeholder="email"
							onChange={handleAddFormChange}
							className="form-control mb-2"
						/>
						<Form.Control
							type="password"
							name="password"
							required
							placeholder="password"
							onChange={handleAddFormChange}
							className="form-control mb-2"
						/>
						<Button
							variant=""
							className="btn btn-primary me-2 wd-100p "
							type="submit"
						>
							Add Student
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						className="btn btn-primary wd-20p"
						onClick={() => setShowModal(false)}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
};

Students.propTypes = {};

Students.defaultProps = {};

export default Students;
