import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Progress,
} from "reactstrap";

const HomeHeader = () => {
  return (
    <>
      <div className="header pb-8 pt-5  d-flex align-items-center">
        {/* Mask  pb-8*/}
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="" fluid>
          <Row className="mt-5">
            <Col lg="6" xl="6">
              <Row>
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Order Welfare
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <a href="/employees">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                          </a>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 555
                        </span>
                        <span className="text-nowrap">Wait Approve</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Order Private
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <a href="/employees">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                          </a>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 555
                        </span>
                        <span className="text-nowrap">Wait Approve</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Active Users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <a href="/employees">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                          </a>
                        </Col>
                      </Row>
                      {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 555
                        </span>
                        <span className="text-nowrap">Wait Approve</span>
                      </p> */}
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Active Projects
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">2</span>
                        </div>
                        <Col className="col-auto">
                          <a href="/employees">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="6" xl="6">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>Task completed</span>
                      </div>
                      <div className="progress-percentage">
                        <span>60%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-default"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeHeader;
