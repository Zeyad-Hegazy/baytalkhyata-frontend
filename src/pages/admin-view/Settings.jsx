/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Nav, Row, Tab, FormGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagesData } from "../../common/commonimages";
import { LightGallery } from "../../common/galleryfunctionaldata";
import { Friendsdata } from "../../common/commondata";
import Select from 'react-select';
import { OptionTimezone } from "../../common/selectdata";
import Pageheader from "../../layout/layoutcomponent/pageheader";
const Settings = () => {
	const PhotobookImage = ({ url }) => (
		<React.Fragment>
		  <img src={url} alt="" />
		</React.Fragment>
	  );
	
	  const [Timezone, setTimezone] = useState("");
	  const handleOnchangeTimezone = () => {
		setTimezone(Timezone);
	  };
  return (
	<Fragment>
    
    <Pageheader title="PROFILE"  heading="Pages"   active="Profile" />

    <Row>
      <Col lg={12} md={12}>
        <Card className="custom-card customs-cards">
          <Card.Body className=" d-md-flex bg-white">
            <div className="">
              <span className="profile-image pos-relative">
                <img
                  className="br-5"
                  alt=""
                  src={imagesData('female18')}
                />
                <span className="bg-success text-white wd-1 ht-1 rounded-pill profile-online"></span>
              </span>
            </div>
            <div className="my-md-auto mt-4 prof-details">
              <h4 className="font-weight-semibold ms-md-4 ms-0 mb-1 pb-0">
                Sonya Taylor
              </h4>
              <p className="tx-13 text-muted ms-md-4 ms-0 mb-2 pb-2 ">
                <span className="me-3 d-inline-block">
                  <i className="far fa-address-card me-2 d-inline-block"></i>Ui/Ux Developer
                </span>
                <span className="me-3 d-inline-block">
                  <i className="fa fa-taxi me-2 d-inline-block"></i>West fransisco,Alabama
                </span>
                <span>
                  <i className="far fa-flag me-2 d-inline-block"></i>New Jersey
                </span>
              </p>
              <p className="text-muted ms-md-4 ms-0 mb-2">
                <span>
                  <i className="fa fa-phone me-2"></i>
                </span>
                <span className="font-weight-semibold me-2">Phone:</span>
                <span>+94 12345 6789</span>
              </p>
              <p className="text-muted ms-md-4 ms-0 mb-2">
                <span>
                  <i className="fa fa-envelope me-2"></i>
                </span>
                <span className="font-weight-semibold me-2">Email:</span>
                <span>spruko.space@gmail.com</span>
              </p>
              <p className="text-muted ms-md-4 ms-0 mb-2">
                <span>
                  <i className="fa fa-globe me-2"></i>
                </span>
                <span className="font-weight-semibold me-2">Website</span>
                <span>sprukotechnologies</span>
              </p>
            </div>
          </Card.Body>
        </Card>
        <span className=" py-0 ">
          <div className="profile-tab tab-menu-heading border-bottom-0 ">
            <Tab.Container id="left-tabs-example" defaultActiveKey="About">
              <Nav
                variant="pills"
                className="nav profile-tabs main-nav-line tabs-menu profile-nav-line bg-white mb-4 border-0 br-5 mb-0	"
              >
                <Nav.Item className="me-1">
                  <Nav.Link className=" mb-2 mt-2" eventKey="About">
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="me-1">
                  <Nav.Link className="mb-2 mt-2" eventKey="EditProfile">
                    Edit Profile
                  </Nav.Link>
                </Nav.Item>
       
                <Nav.Item className="me-1">
                  <Nav.Link className="mb-2 mt-2" eventKey="AccountSettings">
                    Account Settings
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Row className=" row-sm ">
                <Col lg={12} md={12}>
                  <div className="card main-content-body-profile">
                    <Tab.Content>
                      <Tab.Pane eventKey="About">
                        <div
                          className="main-content-body tab-pane  active"
                          id="about"
                        >
                          <Card>
                            <Card.Body className=" p-0 border-0 p-0 rounded-10">
                              <div className="p-4">
                                <h4 className="tx-15 text-uppercase mb-3">
                                  BIOdata
                                </h4>
                                <p className="m-b-5">
                                  Hi I'm Teri Dactyl,has been the industry's
                                  standard dummy text ever since the 1500s, when
                                  an unknown printer took a galley of type.
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum felis eu pede mollis pretium.
                                  Integer tincidunt.Cras dapibus. Vivamus
                                  elementum semper nisi. Aenean vulputate
                                  eleifend tellus. Aenean leo ligula, porttitor
                                  eu, consequat vitae, eleifend ac, enim.
                                </p>
                                <div className="m-t-30">
                                  <div className=" p-t-10">
                                    <h5 className="text-primary m-b-5 tx-14">
                                      Lead designer / Developer
                                    </h5>
                                    <p className="">websitename.com</p>
                                    <p>
                                      <b>2010-2015</b>
                                    </p>
                                    <p className="text-muted tx-13 m-b-0">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                    </p>
                                  </div>

                                  <div className="">
                                    <h5 className="text-primary m-b-5 tx-14">
                                      Senior Graphic Designer
                                    </h5>
                                    <p className="">coderthemes.com</p>
                                    <p>
                                      <b>2007-2009</b>
                                    </p>
                                    <p className="text-muted tx-13 mb-0">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="border-top"></div>
                              <div className="p-4">
                                <label className="main-content-label tx-13 mg-b-20">
                                  Statistics
                                </label>
                                <div className="profile-cover__info ms-4 ms-auto p-0">
                                  <ul className="nav p-0 border-bottom-0 mb-0">
                                    <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                      <span className="border-0 mb-0 pb-0">
                                        113
                                      </span>
                                      Projects
                                    </li>
                                    <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                      <span className="border-0 mb-0 pb-0">
                                        245
                                      </span>
                                      Followers
                                    </li>
                                    <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                      <span className="border-0 mb-0 pb-0">
                                        128
                                      </span>
                                      Following
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="border-top"></div>
                              <div className="p-4">
                                <label className="main-content-label tx-13 mg-b-20">
                                  Contact
                                </label>
                                <div className="d-sm-flex">
                                  <div className="mg-sm-r-20 mg-b-10">
                                    <div className="main-profile-contact-list">
                                      <div className="media">
                                        <div className="media-icon bg-primary-transparent text-primary">
                                          <i className="icon ion-md-phone-portrait"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Mobile</span>
                                          <div> +245 354 654 </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mg-sm-r-20 mg-b-10">
                                    <div className="main-profile-contact-list">
                                      <div className="media">
                                        <div className="media-icon bg-success-transparent text-success">
                                          <i className="icon ion-logo-slack"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Slack</span>
                                          <div> @spruko.w </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="">
                                    <div className="main-profile-contact-list">
                                      <div className="media">
                                        <div className="media-icon bg-info-transparent text-info">
                                          <i className="icon ion-md-locate"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Current Address</span>
                                          <div> San Francisco, CA </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-top"></div>
                              <div className="p-4">
                                <label className="main-content-label tx-13 mg-b-20">
                                  Social
                                </label>
                                <div className="d-lg-flex flex-wrap">
                                  <div className="mg-md-r-20 mg-b-10">
                                    <div className="main-profile-social-list">
                                      <div className="media">
                                        <div className="media-icon bg-primary-transparent text-primary">
                                          <i className="icon ion-logo-github"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Github</span>{" "}
                                          <Link to="#">github.com/spruko</Link>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mg-md-r-20 mg-b-10">
                                    <div className="main-profile-social-list">
                                      <div className="media">
                                        <div className="media-icon bg-success-transparent text-success">
                                          <i className="icon ion-logo-twitter"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Twitter</span>{" "}
                                          <Link to="#">
                                            twitter.com/spruko.me
                                          </Link>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mg-md-r-20 mg-b-10">
                                    <div className="main-profile-social-list">
                                      <div className="media">
                                        <div className="media-icon bg-info-transparent text-info">
                                          <i className="icon ion-logo-linkedin"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Linkedin</span>{" "}
                                          <Link to="#">
                                            linkedin.com/in/spruko
                                          </Link>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mg-md-r-20 mg-b-10">
                                    <div className="main-profile-social-list">
                                      <div className="media">
                                        <div className="media-icon bg-danger-transparent text-danger">
                                          <i className="icon ion-md-link"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>My Portfolio</span>{" "}
                                          <Link to="#">spruko.com/</Link>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="EditProfile">
                        <div
                          className="main-content-body tab-pane border-top-0"
                          id="edit"
                        >
                          <Card>
                            <Card.Body className=" border-0">
                              <div className="mb-4 main-content-label">
                                Personal Information
                              </div>
                              <Form className="form-horizontal">
                                <div className="mb-4 main-content-label">
                                  Name
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        User Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="User Name"
                                        defaultValue="Mack Adamia"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        First Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        defaultValue="Mack Adamia"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        last Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        defaultValue="Mack Adamia"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Nick Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Nick Name"
                                        defaultValue="Spruha"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Designation
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Designation"
                                        defaultValue="Web Designer"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  Contact Info
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Email<i>(required)</i>
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        defaultValue="info@Spruha.in"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Website
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Website"
                                        defaultValue="@spruko.w"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Phone
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="phone number"
                                        defaultValue="+245 354 654"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Address
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <textarea
                                        className="form-control"
                                        name="example-textarea-input"
                                        rows="2"
                                        placeholder="Address"
                                        defaultValue="San Francisco, CA"
                                      ></textarea>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  Social Info
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Twitter
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="twitter"
                                        defaultValue="twitter.com/spruko.me"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Facebook
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="facebook"
                                        defaultValue="https://www.facebook.com/Spruha"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Google+
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="google"
                                        defaultValue="spruko.com"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Linked in
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="linkedin"
                                        defaultValue="linkedin.com/in/spruko"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Github
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="github"
                                        defaultValue="github.com/sprukos"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  About Yourself
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Biographical Info
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <textarea
                                        className="form-control"
                                        name="example-textarea-input"
                                        rows="4"
                                        defaultValue="pleasure rationally encounter but because pursue
                            consequences that are extremely painful.occur in
                            which toil and pain can procure him some great
                            pleasure.."
                                      ></textarea>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  Email Preferences
                                </div>
                                <FormGroup className="form-group mb-0">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Verified User
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <div className="custom-controls-stacked">
                                        <label className="ckbox mg-b-10">
                                          <input
                                            defaultChecked
                                            type="checkbox"
                                          />
                                          <span>
                                            {" "}
                                            Accept to receive post or page
                                            notification emails
                                          </span>
                                        </label>
                                        <label className="ckbox">
                                          <input
                                            defaultChecked
                                            type="checkbox"
                                          />
                                          <span>
                                            {" "}
                                            Accept to receive email sent to
                                            multiple recipients
                                          </span>
                                        </label>
                                      </div>
                                    </Col>
                                  </Row>
                                </FormGroup>
                              </Form>
                            </Card.Body>
                          </Card>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Timeline">
                        <div
                          className="main-content-body  tab-pane border-top-0"
                          id="timeline"
                        >
                          <div className="border-0">
                            <div className="main-content-body main-content-body-profile">
                              <div className="main-profile-body p-0">
                                <Row className=" row-sm">
                                  <div className="col-12">
                                    <Card className=" mg-b-20 border">
                                      <Card.Header className=" p-4">
                                        <div className="media">
                                          <div className="media-user me-2">
                                            <div className="main-img-user avatar-md">
                                              <img
                                                alt=""
                                                className="rounded-circle"
                                                src={imagesData('female6')}
                                              />
                                            </div>
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-2 ms-2">
                                              Mintrona Pechon Pechon
                                            </h6>
                                            <span className="text-primary ms-2">
                                              just now
                                            </span>
                                          </div>
                                          <div className="ms-auto">
                                            <Dropdown className=" show main-contact-star">
                                              <Dropdown.Toggle
                                                variant=""
                                                className="new option-dots2"
                                                data-bs-toggle="dropdown"
                                               
                                              >
                                                <i className="fe fe-more-vertical  tx-18"></i>
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu shadow">
                                                {" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Edit Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Delete Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Personal Settings
                                                </Dropdown.Item>{" "}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </Card.Header>
                                      <div className="card-body">
                                        <p className="mg-t-0">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable.
                                        </p>
                                        <Row className=" row-sm">
                                          <div className="col">
                                            <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2 me-4"
                                                src={imagesData('media1')}
                                              />
                                            </Link>
                                            <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5"
                                                src={imagesData('media2')}
                                              />
                                            </Link>
                                          </div>
                                        </Row>
                                        <div className="media mg-t-15 profile-footer">
                                          <div className="media-user me-2">
                                            <div className="demo-avatar-group">
                                              <div className="demo-avatar-group main-avatar-list-stacked">
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female12')}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female12')}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female5')}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female6')}
                                                  />
                                                </div>
                                                <div className="main-avatar">
                                                  {" "}
                                                  +23{" "}
                                                </div>
                                              </div>
                                              
                                            </div>
                                            
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-10">
                                              28 people like your photo
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                    </Card>
                                    <Card className=" mg-b-20 border">
                                      <Card.Header className=" p-4">
                                        <div className="media">
                                          <div className="media-user me-2">
                                            <div className="main-img-user avatar-md">
                                              <img
                                                alt=""
                                                className="rounded-circle"
                                                src={imagesData('female6')}
                                              />
                                            </div>
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 ms-2 mg-t-3">
                                              Mintrona Pechon Pechon
                                            </h6>
                                            <span className="text-muted ms-2">
                                              Sep 26 2019, 10:14am
                                            </span>
                                          </div>
                                          <div className="ms-auto">
                                            <Dropdown className=" show main-contact-star">
                                              <Dropdown.Toggle
                                                variant=""
                                                className="new option-dots2"
                                                data-bs-toggle="dropdown"
                                                
                                              >
                                                <i className="fe fe-more-vertical  tx-18"></i>
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu shadow">
                                                {" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Edit Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Delete Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Personal Settings
                                                </Dropdown.Item>{" "}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </Card.Header>
                                      <Card.Body className=" h-100">
                                        <p className="mg-t-0">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable.
                                        </p>
                                        <Row className=" row-sm">
                                          <div className="col">
                                            <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2 me-4"
                                                src={imagesData('media4')}
                                              />
                                            </Link>
                                            <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2"
                                                src={imagesData('media1')}
                                              />
                                            </Link>
                                          </div>
                                        </Row>
                                        <div className="media mg-t-15 profile-footer">
                                          <div className="media-user me-2">
                                            <div className="demo-avatar-group">
                                              <div className="demo-avatar-group main-avatar-list-stacked">
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female12')}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female7')}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female5')}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female6')}
                                                  />
                                                </div>
                                                <div className="main-avatar">
                                                  {" "}
                                                  +23{" "}
                                                </div>
                                              </div>
                                              
                                            </div>
                                            
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-10">
                                              28 people like your photo
                                            </h6>
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>
                                    <Card className=" mg-b-20 border">
                                      <Card.Header className=" p-4">
                                        <div className="media">
                                          <div className="media-user me-2">
                                            <div className="main-img-user avatar-md">
                                              <img
                                                alt=""
                                                className="rounded-circle"
                                                src={imagesData('female6')}
                                              />
                                            </div>
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 ms-2 mg-t-3">
                                              Mintrona Pechon Pechon
                                            </h6>
                                            <span className="text-muted ms-2">
                                              Sep 26 2019, 10:14am
                                            </span>
                                          </div>
                                          <div className="ms-auto">
                                            <Dropdown className=" show main-contact-star">
                                              <Dropdown.Toggle
                                                variant=""
                                                className="new option-dots2"
                                                data-bs-toggle="dropdown"
                                                
                                              >
                                                <i className="fe fe-more-vertical  tx-18"></i>
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu shadow">
                                                {" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Edit Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Delete Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Personal Settings
                                                </Dropdown.Item>{" "}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </Card.Header>
                                      <Card.Body className=" h-100">
                                        <p className="mg-t-0">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable.
                                        </p>
                                        <div className="media mg-t-15 profile-footer">
                                          <div className="media-user me-2">
                                            <div className="demo-avatar-group">
                                              <div className="demo-avatar-group main-avatar-list-stacked">
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female12')}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female3')}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female4')}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female10')}
                                                  />
                                                </div>
                                                <div className="main-avatar">
                                                  {" "}
                                                  +23{" "}
                                                </div>
                                              </div>
                                              
                                            </div>
                                            
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-10">
                                              28 people like your photo
                                            </h6>
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>
                                    <Card className=" border">
                                      <Card.Header className=" p-4">
                                        <div className="media">
                                          <div className="media-user me-2">
                                            <div className="main-img-user avatar-md">
                                              <img
                                                alt=""
                                                className="rounded-circle"
                                                src={imagesData('female2')}
                                              />
                                            </div>
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 ms-2 mg-t-3">
                                              Mintrona Pechon Pechon
                                            </h6>
                                            <span className="text-muted ms-2">
                                              Sep 26 2019, 10:14am
                                            </span>
                                          </div>
                                          <div className="ms-auto">
                                            <Dropdown className=" show main-contact-star">
                                              <Dropdown.Toggle
                                                variant=""
                                                className="new option-dots2"
                                                data-bs-toggle="dropdown"
                                                
                                              >
                                                <i className="fe fe-more-vertical  tx-18"></i>
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu shadow">
                                                {" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Edit Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Delete Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Personal Settings
                                                </Dropdown.Item>{" "}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </Card.Header>
                                      <Card.Body className=" h-100">
                                        <p className="mg-t-0">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable.
                                        </p>
                                        <Row className=" row-sm">
                                          <div className="col">
                                            <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2 me-3"
                                                src={imagesData('media4')}
                                              />
                                            </Link>
                                            <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2"
                                                src={imagesData('media3')}
                                              />
                                            </Link>
                                          </div>
                                        </Row>
                                        <div className="media mg-t-15 profile-footer">
                                          <div className="media-user me-2">
                                            <div className="demo-avatar-group">
                                              <div className="demo-avatar-group main-avatar-list-stacked">
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female11')}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female12')}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female3')}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={imagesData('female5')}
                                                  />
                                                </div>
                                                <div className="main-avatar">
                                                  {" "}
                                                  +23{" "}
                                                </div>
                                              </div>
                                              
                                            </div>
                                            
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-10">
                                              28 people like your photo
                                            </h6>
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>
                                  </div>
                                </Row>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Gallery">
                        <div
                          className="main-content-body  border tab-pane border-top-0"
                          id="gallery"
                        >
                          <Card.Body className="">
                            <Row className="masonry">
                            <LightGallery />
                            </Row>
                          </Card.Body>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Friends">
                        <div
                          className="main-content-body tab-pane border-top-0"
                          id="friends"
                        >
                          <Card.Body className=" border pd-b-10">
                           
                            <Row className=" row-sm">
                            {Friendsdata.map((idx)=>(
                              <Col sm={12} md={6} lg={6} xl={3} key={Math.random()}>
                                <Card className="custom-card border">
                                  <Card.Body className="user-lock text-center">
                                    <Dropdown className="text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                       
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={idx.src}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                       {idx.title}
                                      </h4>
                                      <span className="text-muted">
                                        {idx.text}
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                              ))}
                            </Row>
                          </Card.Body>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="AccountSettings">
                        <div
                          className="main-content-body tab-pane  border-0"
                          id="settings"
                        >
                          <Card>
                            <Card.Body
                              className=" border-0"
                              data-select2-id="12"
                            >
                              <Form
                                className="form-horizontal"
                                data-select2-id="11"
                              >
                                <div className="mb-4 main-content-label">
                                  Account
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        User Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="User Name"
                                        defaultValue="Sonia Taylor"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Email
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        defaultValue="info@SoniaTaylor.in"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup
                                  className="form-group "
                                  data-select2-id="108"
                                >
                                  <Row className="" data-select2-id="107">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Language
                                      </Form.Label>
                                    </Col>
                                    <Col
                                      md={9}
                                      data-select2-id="106"
                                    >
                                      <select
                                        className="form-control select2"
                                        tabIndex="-1"
                                        aria-hidden="true"
                                      >
                                        <option>Us English</option>
                                        <option>Arabic</option>
                                        <option>Korean</option>
                                      </select>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup
                                  className="form-group "
                                  data-select2-id="10"
                                >
                                  <Row className="" data-select2-id="9">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Timezone
                                      </Form.Label>
                                    </Col>
                                    <Col
                                      md={9}
                                      data-select2-id="8"
                                    >
                                      <Select
                          onChange={handleOnchangeTimezone}
                          options={OptionTimezone}
                          
                          classNamePrefix="Select2"
                          isSearchable
                          placeholder="(GMT-11:00) Midway Island, Samoa"
                        />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3} className="col">
                                      <Form.Label className="form-label">
                                        Verification
                                      </Form.Label>
                                    </Col>
                                    <Col md={9} className="col">
                                      <Form.Label className="ckbox  mg-b-10">
                                        <input type="checkbox" />
                                        <span>Email</span>
                                      </Form.Label>
                                      <Form.Label className="ckbox  mg-b-10">
                                        <input defaultChecked type="checkbox" />
                                        <span>SMS</span>
                                      </Form.Label>
                                      <Form.Label className="ckbox  mg-b-10">
                                        <input type="checkbox" />
                                        <span>Phone</span>
                                      </Form.Label>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  Secuirity Settings
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Login Verification
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      {" "}
                                      <Link className="" to="#">
                                        Settup Verification
                                      </Link>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Password Verification
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Label className="ckbox  mg-b-10">
                                        <input type="checkbox" />
                                        <span>Require Personal Details</span>
                                      </Form.Label>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div>
                                  <div className="mb-4 main-content-label">
                                    Notifications
                                  </div>
                                  <FormGroup className="form-group mb-0">
                                    <Row className=" row-sm">
                                      <Col md={3}>
                                        <Form.Label className="form-label">
                                          Configure Notifications
                                        </Form.Label>
                                      </Col>
                                      <Col md={9}>
                                        <Form.Label className="d-block mg-b-15-f">
                                          <input
                                            type="checkbox"
                                            name="custom-switch-checkbox"
                                            className="custom-switch-input"
                                            defaultChecked
                                          />
                                          <span className="custom-switch-indicator"></span>
                                          <span className="text-muted ms-2">
                                            Allow all Notifications
                                          </span>
                                        </Form.Label>
                                        <Form.Label className="d-block mg-b-15-f">
                                          <input
                                            type="checkbox"
                                            name="custom-switch-checkbox"
                                            className="custom-switch-input"
                                          />
                                          <span className="custom-switch-indicator"></span>
                                          <span className="text-muted ms-2">
                                            Disable all Notifications
                                          </span>
                                        </Form.Label>
                                        <Form.Label className="d-block mg-b-15-f">
                                          <input
                                            type="checkbox"
                                            name="custom-switch-checkbox"
                                            className="custom-switch-input"
                                            defaultChecked
                                          />{" "}
                                          <span className="custom-switch-indicator"></span>
                                          <span className="text-muted ms-2">
                                            Notification Sounds
                                          </span>
                                        </Form.Label>
                                      </Col>
                                    </Row>
                                  </FormGroup>
                                </div>
                                <FormGroup className="form-group float-end">
                                  <Row className=" row-sm">
                                    <Col md={12}>
                                      {" "}
                                      <Link
                                        className="btn btn-primary "
                                        to="#"
                                      >
                                        Save Changes
                                      </Link>{" "}
                                      <Link
                                        className="btn btn-secondary"
                                        to="#"
                                      >
                                        Change Password
                                      </Link>{" "}
                                    </Col>
                                  </Row>
                                </FormGroup>
                              </Form>
                            </Card.Body>
                          </Card>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </span>
      </Col>
    </Row>
    <Row className=" row-sm">
      <Col lg={12} md={12}>
        <div className="tab-content"></div>
        
      </Col>
    </Row>
  </Fragment>
  )
}

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings