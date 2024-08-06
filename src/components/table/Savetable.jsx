/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import {
	createStudent,
	getStudents,
	updateStudent,
} from "../../api/admin/students";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "./../../api/admin/students";
import DeleteIcon from '@mui/icons-material/Delete';

export const StudentTable = ({ getAll, contacts }) => {
	const dispatch = useDispatch();
	const [modalShow, setModalShow] = React.useState(false);
	const [confirmDeleteShow, setConfirmDeleteShow] = useState(false);

	const [addFormData, setAddFormData] = useState({
		fullName: "",
		Password: "",
		phone: "",
		email: "",
	});

	const [editFormData, setEditFormData] = useState({
		fullName: "",
		phone: "",
		email: "",
	});

	const [editContactId, setEditContactId] = useState(null);
	const [deleteContactId, setDeleteContactId] = useState(null);

	const handleAddFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...addFormData };
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	const handleEditFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...editFormData };
		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	};

	const handleCancelClick = () => {
		setEditContactId(null);
	};

	const handleAddFormSubmit = async (event) => {
		event.preventDefault();
		const response = await createStudent(addFormData);
		dispatch({ type: "ADD_STUDENT", payload: response.data.result });
		await getAll();
		setModalShow(false);
	};

	const handleEditFormSubmit = async (event) => {
		event.preventDefault();
		const response = await updateStudent(editContactId, editFormData);
		dispatch({ type: "UPT_STUDENT", payload: response.data.result });
		await getAll();
		handleCancelClick();
	};

	const handleEditClick = (event, contact) => {
		event.preventDefault();
		setEditContactId(contact._id);

		const formValues = {
			fullName: contact.fullName,
			email: contact.email,
			phone: contact.phone,
			points: contact.points,
			lastSeen: contact.lastSeen,
		};

		setEditFormData(formValues);
	};

	const handleDeleteClick = async (contactId) => {
		await deleteStudent(contactId);
		dispatch({ type: "RMV_STUDENT", payload: { id: contactId } });
		await getAll();
		setConfirmDeleteShow(false);
	};

	return (
		<div className="app-container">
			<Form onSubmit={handleEditFormSubmit}>
				<Button
					variant=""
					className="btn btn-primary mb-3"
					onClick={() => setModalShow(true)}
				>
					Add New Student
				</Button>
				<Table
					id="delete-datatable"
					className="table table-bordered text-nowrap border-bottom"
				>
					<thead>
						<tr>
							{/* <th className="wd-5p text-center">S NO</th> */}
							<th>Full Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Points</th>
							<th>Last Seen</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map((contact) => (
							<Fragment key={contact._id}>
								{editContactId === contact._id ? (
									<EditableRow
										editFormData={editFormData}
										handleEditFormChange={handleEditFormChange}
										handleCancelClick={handleCancelClick}
									/>
								) : (
									<ReadOnlyRow
										contact={contact}
										handleEditClick={handleEditClick}
										handleShowDeleteModel={setConfirmDeleteShow}
										setDeleteContactId={setDeleteContactId}
									/>
								)}
							</Fragment>
						))}
					</tbody>
				</Table>
			</Form>

			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
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
						onClick={() => setModalShow(false)}
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
						onClick={() => setModalShow(false)}
					>
						Close
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
					<Button
						variant="danger"
						onClick={() => handleDeleteClick(deleteContactId)}
					>
						Delete
					</Button>
					<Button
						// variant="secondary"
						onClick={() => setConfirmDeleteShow(false)}
					>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

const EditableRow = ({
	editFormData,
	handleEditFormChange,
	handleCancelClick,
}) => {
	return (
		<tr>
			<td>
				<Form.Control
					type="text"
					required
					placeholder="Enter a name..."
					name="fullName"
					value={editFormData.fullName}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>
				<Form.Control
					type="text"
					required
					placeholder="Enter an lastname..."
					name="email"
					value={editFormData.email}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>
				<Form.Control
					type="text"
					required
					placeholder="Enter a phone number..."
					name="phone"
					value={editFormData.phone}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>{editFormData.points}</td>
			<td>{editFormData.lastSeen}</td>
			<td>
				<Button variant="" className="btn btn-primary me-1" type="submit">
					Save
				</Button>
				<Button
					variant=""
					className="btn btn-danger me-1"
					type="button "
					onClick={handleCancelClick}
				>
					Cancel
				</Button>
			</td>
		</tr>
	);
};

const ReadOnlyRow = ({
	contact,
	handleEditClick,
	handleShowDeleteModel,
	setDeleteContactId,
}) => {
	return (
		<tr>
			{/* <td className="wd-5p text-center">{contact.sno}</td> */}
			<td>{contact.fullName}</td>
			<td>{contact.email}</td>
			<td>{contact.phone}</td>
			<td>{contact.points}</td>
			<td>{contact.lastSeen}</td>
			<td>
				<Button
					variant=""
					className="btn btn-primary me-1"
					type="button"
					onClick={(event) => handleEditClick(event, contact)}
				>
					Edit
				</Button>
				<Button
				
					variant="outlined"
					color="error"
					className="btn btn-danger me-1"
					type="button"
					onClick={() => {
						setDeleteContactId(contact._id);
						handleShowDeleteModel(true);
	
					}}
					startIcon={<DeleteIcon />}

				>
					Delete
				</Button>
			</td>
		</tr>
	);
};
