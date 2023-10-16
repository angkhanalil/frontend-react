import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Progress,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

const ProjectHeader = () => {
  return (
    <>
      <div className="header pb-8 pt-5  d-flex align-items-center">
        {/* Mask  pb-8*/}
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="" fluid>
          <Row className="mt-5">
            <Col lg="12" xl="12">
              <Row>
                <Col lg="3" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Order
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <a href="/employees">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <FontAwesomeIcon icon={faCircleDown} />
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
                <Col lg="3" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Order Success
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <a href="/employees">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <FontAwesomeIcon icon={faCircleDown} />
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
                <Col lg="3" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Order Wait Approve
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <a href="/employees">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <FontAwesomeIcon icon={faCircleDown} />
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
                <Col lg="3" xl="3">
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
                              <FontAwesomeIcon icon={faCircleDown} />
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProjectHeader;
