/* eslint-disable no-unused-vars */
import { Fragment, useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { StudentTable } from "../../components/table/Savetable";
import { getStudents } from "../../api/admin/students";
import { useDispatch, useSelector } from "react-redux";

const Students = () => {
	const students = useSelector((state) => state.students);
	const dispatch = useDispatch();

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

	return (
		<Fragment>
			<Pageheader title="STUDENTS" heading="Main Menu" active="Students" />
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					<div className="main-container container-fluid">
						<Row className=" row-sm">
							<Col lg={12}>
								<Card className="custom-card">
									<Card.Body>
										{/* <div>
											<h6 className="main-content-label mb-1">
												Deleted Row DataTable
											</h6>
											<p className="text-muted card-sub-title">
												Responsive is an extension for DataTables that resolves
												that problem by optimising the table's layout for
												different screen sizes through the dynamic insertion and
												removal of columns from the table.
											</p>
										</div> */}
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
		</Fragment>
	);
};

Students.propTypes = {};

Students.defaultProps = {};

export default Students;
