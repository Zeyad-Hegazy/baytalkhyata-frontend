/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react';
import { Card, Col, Dropdown, Row, InputGroup, Form, Button } from 'react-bootstrap';
import Pageheader from '../../layout/layoutcomponent/pageheader';
import { Link } from 'react-router-dom';
import { Filmanagerdata1 } from '../../common/commondata';

const Library = () => {
  const [data1, setData1] = useState(Filmanagerdata1);

  const myFunction = (idx) => {
    const userdata = [];
    for (const Data of Filmanagerdata1) {
      if (Data.title[0] === ' ') {
        Data.title = Data.title.trim();
      }
      if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
          userdata.push(Data);
        }
      }
    }
    setData1(userdata);
  };

  return (
    <Fragment>
      <Pageheader title="Libirary" heading="Main Menu" active="Libirary" />

      <Row>
        <Col lg={12} xl={12}>
          <Row>
            <div className="col-sm-6">
              <div className="tx-18 mb-4">Files</div>
            </div>
            <div className="col-sm-6 col-auto">
              <InputGroup className="input-group mb-2">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Search files....."
                  onChange={(ele) => myFunction(ele.target.value)}
                />
                <span className="input-group-append">
                  <Button className="btn ripple btn-primary" type="button">
                    Search
                  </Button>
                </span>
              </InputGroup>
            </div>
          </Row>
          <Row>
            {data1.map((item) => (
              <Col sm={6} xl={2} md={4} key={item.id}> {/* Use a unique property as key */}
                <Card className="p-0">
                  <div className="d-flex align-items-center px-3 pt-3">
                    <Dropdown className="float-end optiondots ms-auto">
                      <Dropdown.Toggle
                        variant=''
                        className="option-dots"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#" className='d-inline-flex align-items-center'>
                          <i className="fe fe-edit me-2"></i> Edit
                        </Dropdown.Item>
                        <Dropdown.Item href="#" className='d-inline-flex align-items-center'>
                          <i className="fe fe-share me-2"></i> Share
                        </Dropdown.Item>
                        <Dropdown.Item href="#" className='d-inline-flex align-items-center'>
                          <i className="fe fe-trash me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Card.Body className="pt-0 text-center">
                    <div className="file-manger-icon">
                      <Link to={`${import.meta.env.BASE_URL}app/filedetails/`}>
                        <img
                          src={item.src}
                          alt=""
                          className="br-7"
                        />
                      </Link>
                    </div>
                    <h6 className="mb-1 font-weight-semibold">{item.title}</h6>
                    <span className="text-muted">{item.text}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <ul className="pagination float-end mb-4">
            <li className="page-item page-prev disabled">
              <Link className="page-link" to="#" tabIndex="-1">
                Prev
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item page-next">
              <Link className="page-link" to="#">
                Next
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Library;
