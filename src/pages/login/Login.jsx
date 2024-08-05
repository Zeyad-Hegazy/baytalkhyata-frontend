import React, { useState } from "react";
import { Button, Col, Form, Row, Alert, Tab, Nav, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { imagesData } from "../../common/commonimages";
import { logIn } from "../../api/auth";

const Login = () => {
	const [err, setError] = useState("");

	const [data, setData] = useState({
		email: "Bayt-Alkhyata@gmail.com",
		password: "1234567890",
	});
	const { email, password } = data;

	const changeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		setError("");
	};

	const navigate = useNavigate();

	const loginHandler = async () => {
		// if (
		// 	data.email == "Bayt-Alkhyata@gmail.com" &&
		// 	data.password == "1234567890"
		// ) {
		// 	navigate(`/admin/dashboard`);
		// } else {
		// 	setError("The Email Doesn't Exist");
		// 	setData({
		// 		email: "adminreact@gmail.com",
		// 		password: "1234567890",
		// 	});
		// }
		// e.preventDafault();
		const response = await logIn(data);

		if (response.status === 200) {
			localStorage.setItem("auth", JSON.stringify(response.data.result));
			navigate(`/admin/dashboard`);
		}
	};
	return (
		<React.Fragment>
			<div className="square-box"> </div>
			<div className="page  bg-primary-gradient">
				<div className="page-single">
					<div className="container" style={{ marginTop: "89px" }}>
						<Row>
							<Col lg={5} className="d-block mx-auto login-page">
								<Tab.Container id="left-tabs-example" defaultActiveKey="react">
									<Card className="rounded-5">
										<Nav
											variant="pills"
											className="justify-content-center authentication-tabs"
										></Nav>
										<Tab.Content>
											<Tab.Pane eventKey="react">
												<div className="card-sigin py-2 ">
													<div className="main-card-signin d-md-flex">
														<div className="wd-100p ">
															<div className="d-flex justify-content-center mb-4">
																<Link to="#">
																	<img
																		src={imagesData("logo_btk")}
																		className="sign-favicon ht-80"
																		alt="logo"
																	/>
																</Link>
															</div>
															<div className="">
																<div className="main-signup-header">
																	<h2 className="text-center mb-5">
																		Welcome back!
																	</h2>
																	<div className="panel panel-primary">
																		<div className=" tab-menu-heading mb-2 border-bottom-0">
																			<div className="tabs-menu1">
																				{err && (
																					<Alert variant="danger">{err}</Alert>
																				)}
																				<Form>
																					<Form.Group className="form-group">
																						<Form.Label>Email</Form.Label>{" "}
																						<Form.Control
																							className="form-control"
																							placeholder="Enter your email"
																							name="email"
																							type="text"
																							value={email}
																							onChange={changeHandler}
																							required
																						/>
																					</Form.Group>
																					<Form.Group className="form-group">
																						<Form.Label>Password</Form.Label>{" "}
																						<Form.Control
																							className="form-control"
																							placeholder="Enter your password"
																							name="password"
																							type="password"
																							value={password}
																							onChange={changeHandler}
																							required
																						/>
																					</Form.Group>
																					<Button
																						variant=""
																						className="btn btn-primary btn-block mt-5"
																						onClick={loginHandler}
																					>
																						Sign In
																					</Button>
																					<div className="main-signin-footer text-center mt-3">
																						<p>
																							<Link
																								to="#"
																								className="mb-3  fw-light fs-8 text-danger"
																							>
																								Forgot password?
																							</Link>
																						</p>
																					</div>
																				</Form>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Tab.Pane>
										</Tab.Content>
									</Card>
								</Tab.Container>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
