import { Fragment, useEffect } from "react";
import { Navbar, Dropdown, Button } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { imagesData } from "../../common/commonimages";
import * as Switcherdata from "../../common/switcherdata";
import { logOut } from "../../api/auth";

export default function AdminHeader() {
	useEffect(() => {
		Switcherdata.localStorageBackUp();
	}, []);

	document.addEventListener("click", function () {
		document.querySelector(".search-result")?.classList.add("d-none");
	});

	const openCloseSidebar = () => {
		document.querySelector("body").classList.toggle("sidenav-toggled");
	};

	const Darkmode = () => {
		if (document.querySelector(".app")?.classList.contains("dark-theme")) {
			document.querySelector(".app")?.classList.remove("dark-theme");
			localStorage.setItem("nowalighttheme", "true");
			localStorage.removeItem("nowadark");

			const DarkMenu2 = document.querySelector("#myonoffswitch6"); // light header
			if (DarkMenu2) {
				DarkMenu2.checked = true;
			}
			const DarkMenu3 = document.querySelector("#myonoffswitch3"); //light menu
			if (DarkMenu3) {
				DarkMenu3.checked = true;
			}

			document.querySelector("#myonoffswitch1").checked = true;
		} else {
			document.querySelector(".app")?.classList.add("dark-theme");
			localStorage.setItem("nowadark", "true");
			localStorage.removeItem("nowalighttheme");

			const DarkMenu2 = document.querySelector("#myonoffswitch8"); //dark header
			if (DarkMenu2) {
				DarkMenu2.checked = true;
			}
			const DarkMenu3 = document.querySelector("#myonoffswitch5"); //dark menu
			if (DarkMenu3) {
				DarkMenu3.checked = true;
			}
			document.querySelector("#myonoffswitch2").checked = true;
		}
	};

	function Fullscreen() {
		if (
			(document.fullScreenElement && document.fullScreenElement === null) ||
			(!document.mozFullScreen && !document.webkitIsFullScreen)
		) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(
					Element.ALLOW_KEYBOARD_INPUT
				);
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	}

	const dispatch = useDispatch();

	let navigate = useNavigate();

	const logoutHandler = async () => {
		await logOut();
		await dispatch({ type: "logout" });
		navigate("/");
	};

	return (
		<Fragment>
			<Navbar
				className="main-header side-header sticky nav nav-item"
				style={{ marginBottom: "-63px" }}
			>
				<div className="main-container container-fluid">
					<div className="main-header-left ">
						<div className="responsive-logo">
							<Link
								to={`${import.meta.env.BASE_URL}dashboard/dashboard1/`}
								className="header-logo"
							>
								<img
									src={imagesData("logo")}
									className="mobile-logo logo-1"
									alt="logo"
								/>
								<img
									src={imagesData("logo")}
									className="mobile-logo dark-logo-1"
									alt="logo"
								/>
							</Link>
						</div>
						<div
							className="app-sidebar__toggle"
							data-bs-toggle="sidebar"
							onClick={() => openCloseSidebar()}
						>
							<Link className="open-toggle" to="#">
								<i className="header-icon fe fe-align-left"></i>
							</Link>
							<Link className="close-toggle" to="#">
								<i className="header-icon fe fe-x"></i>
							</Link>
						</div>
						<div className="logo-horizontal">
							<Link
								to={`${import.meta.env.BASE_URL}dashboard/dashboard1/`}
								className="header-logo"
							>
								<img
									src={imagesData("logo")}
									className="mobile-logo logo-1"
									alt="logo"
								/>
								<img
									src={imagesData("logo")}
									className="mobile-logo dark-logo-1"
									alt="logo"
								/>
							</Link>
						</div>
					</div>
					<div className="main-header-right">
						<Navbar.Toggle
							className="navresponsive-toggler d-lg-none ms-auto"
							type="button"
						>
							<span className="navbar-toggler-icon fe fe-more-vertical"></span>
						</Navbar.Toggle>
						<div className="mb-0 navbar navbar-expand-lg   navbar-nav-right responsive-navbar navbar-dark p-0">
							<Navbar.Collapse
								className="collapse"
								id="navbarSupportedContent-4"
							>
								<ul className="nav nav-item header-icons navbar-nav-right flex-nowrap">
									<li className="dropdown nav-item">
										<Link
											to="#"
											className="new nav-link theme-layout nav-link-bg layout-setting"
											onClick={() => Darkmode()}
										>
											<span className="dark-layout">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="header-icon-svgs"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" />
												</svg>
											</span>
											<span className="light-layout">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="header-icon-svgs"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
												</svg>
											</span>
										</Link>
									</li>
									<li
										className="nav-item full-screen fullscreen-button"
										onClick={Fullscreen}
									>
										<Link className="new nav-link full-screen-link" to="#">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="header-icon-svgs"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z" />
											</svg>
										</Link>
									</li>
									<Dropdown className="dropdown nav-item  main-header-message ">
										<Dropdown.Toggle className="new nav-link" to="#" variant="">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="header-icon-svgs"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
											</svg>
											<span className="badge bg-secondary header-badge">5</span>
										</Dropdown.Toggle>
										<Dropdown.Menu className="slid1">
											<div className="menu-header-content text-start border-bottom">
												<div className="d-flex">
													<h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">
														Messages
													</h6>
													<span className="badge badge-pill badge-warning ms-auto my-auto float-end">
														Mark All Read
													</span>
												</div>
												<p className="dropdown-title-text subtext mb-0 op-6 pb-0 tx-12 ">
													You have 4 unread messages
												</p>
											</div>

											<PerfectScrollbar
												style={{ height: 280 }}
												options={{
													suppressScrollX: true,
													useBothWheelAxes: false,
												}}
											>
												<div className="main-message-list chat-scroll">
													<Dropdown.Item
														href={`${import.meta.env.BASE_URL}pages/mail/chat/`}
														className="dropdown-item d-flex border-bottom"
													>
														<img
															className="  drop-img  cover-image  "
															alt=""
															src={imagesData("female3")}
														/>
														<span className="avatar-status bg-teal avatar-status1"></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-0 name">Teri Dactyl</h5>
															</div>
															<p className="mb-0 desc">
																I'm sorry but i'm not sure how to help you with
																that......
															</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">
																Mar 15 3:55 PM
															</p>
														</div>
													</Dropdown.Item>
													<Dropdown.Item
														href={`${import.meta.env.BASE_URL}pages/mail/chat/`}
														className="dropdown-item d-flex border-bottom"
													>
														<img
															className="drop-img cover-image"
															alt=""
															src={imagesData("female2")}
														/>
														<span className="avatar-status bg-teal avatar-status2"></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-0 name">Allie Grater</h5>
															</div>
															<p className="mb-0 desc">
																All set ! Now, time to get to you now......
															</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">
																Mar 06 01:12 AM
															</p>
														</div>
													</Dropdown.Item>
													<Dropdown.Item
														href={`${import.meta.env.BASE_URL}pages/mail/chat/`}
														className="dropdown-item d-flex border-bottom"
													>
														<img
															className="drop-img cover-image"
															alt=""
															src={imagesData("female9")}
														/>
														<span className="avatar-status bg-teal avatar-status3 "></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-0 name">Aida Bugg</h5>
															</div>
															<p className="mb-0 desc">
																Are you ready to pickup your Delivery...
															</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">
																Feb 25 10:35 AM
															</p>
														</div>
													</Dropdown.Item>
													<Dropdown.Item
														href={`${import.meta.env.BASE_URL}pages/mail/chat/`}
														className="dropdown-item d-flex border-bottom"
													>
														<img
															className="drop-img cover-image"
															alt=""
															src={imagesData("female12")}
														/>
														<span className="avatar-status bg-teal avatar-status4"></span>
														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-0 name">John Quil</h5>
															</div>
															<p className="mb-0 desc">
																Here are some products ...
															</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">
																Feb 12 05:12 PM
															</p>
														</div>
													</Dropdown.Item>
													<Dropdown.Item
														href={`${import.meta.env.BASE_URL}pages/mail/chat/`}
														className="dropdown-item d-flex border-bottom"
													>
														<img
															className="drop-img cover-image"
															alt=""
															src={imagesData("female5")}
														/>
														<span className="avatar-status bg-teal avatar-status5"></span>

														<div className="wd-90p">
															<div className="d-flex">
																<h5 className="mb-0 name">Liz Erd</h5>
															</div>
															<p className="mb-0 desc">
																I'm sorry but i'm not sure how...
															</p>
															<p className="time mb-0 text-start float-start ms-2 mt-2">
																Jan 29 03:16 PM
															</p>
														</div>
													</Dropdown.Item>
												</div>
											</PerfectScrollbar>
											<div className="text-center dropdown-footer">
												<Link
													className="btn btn-primary btn-sm btn-block text-center"
													to={`${import.meta.env.BASE_URL}pages/mail/chat/`}
												>
													VIEW ALL
												</Link>
											</div>
										</Dropdown.Menu>
									</Dropdown>
								</ul>
							</Navbar.Collapse>
						</div>
					</div>
				</div>
				<Button style={{ margin: "2rem" }} onClick={logoutHandler}>
					Logout
				</Button>
			</Navbar>
			<div className="jumps-prevent" style={{ paddingTop: "63px" }}></div>
		</Fragment>
	);
}

AdminHeader.propTypes = {};

AdminHeader.defaultProps = {};
