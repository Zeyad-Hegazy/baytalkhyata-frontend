/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, {useState, Fragment } from "react";
import { Breadcrumb, Col, Pagination, Row,Card, Button  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ADD, Delete } from '../../common/redux/action';
import ProductService from "../../common/ProductService";
import Pageheader from "../../layout/layoutcomponent/pageheader";

const Store = () => {
	const [list, setList] =useState(ProductService.getProductList());

	function handleRemove(id) {
	 const newList = list.filter((list) => list.id !== id);
	 setList(newList);
	}

	  const dispatch = useDispatch();
	  const send = (e) => {
		// console.log(e);
		dispatch(ADD(e));
	  }
	
  return (
	<Fragment>
    
      <Pageheader title="Gift Store"  heading="Main Menu"   active="gift store" />

    
      <Col className="p-0" lg={12} xl={12}>
	  <Button
							className="btn ripple btn-success ms-2 mb-4"
							type="button"
							// onClick={addGiftHandler}
						>
							Add New Gift
						</Button>
        <Row className="row">
			
          {list.map((item) => (
            <Col xl={3} lg={6} md={4} className="alert" key={item.id}>
              <Card className=" item-card ">
                <Card.Body className="pb-0">
                  <div className="text-center zoom">
                    <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shop/`}>
                      <img className="w-100 br-5" src={item.src} alt="img" />
                    </Link>
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
                          <Link to="#" className="shop-title fs-18">
                            {item.name}
                          </Link>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="cardprice-2">
						<i className="fa fa-star text-warning fs-16"></i>
						<span className="number-font">{item.prices}</span>
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
                <Card.Footer className=" text-center mt-4">
                  <div className="text-center ">
                    <Button variant=""
                      className="btn btn-md btn-primary mb-2  w-50 "
                      onClick={() => send(item)}
                    >
                      <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="text-white">
                        <i className="fe fe-shopping-cart me-2"></i>{' '}Edit Gift
                      </Link>
                    </Button>
                    <Button variant="light"
                    
                      className="btn btn-md btn-light mb-2  w-50"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => handleRemove(item.id)}>
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
                    <Button variant="light"
                    
                      className="btn btn-md btn-light mb-2  w-100"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => handleRemove(item.id)}>
                      <span className="me-2 fs-14">Assign To Student</span>
                   
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
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
    </Fragment>
  )
}
Store.propTypes = {};

Store.defaultProps = {};

export default Store
