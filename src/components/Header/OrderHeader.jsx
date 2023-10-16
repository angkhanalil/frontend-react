import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
const OrderHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "400px",

          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container d-flex align-items-center*/}
        <Container className="" fluid>
          <Row>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Total Orders
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <a href="/employees">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                      </a>
                    </Col>
                  </Row>{" "}
                  <p className="mt-3 mb-0 text-muted text-sm"></p>
                </CardBody>
              </Card>
            </Col>{" "}
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Total Orders Success
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <a href="/employees">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                      </a>
                    </Col>
                  </Row>{" "}
                  <p className="mt-3 mb-0 text-muted text-sm"></p>
                </CardBody>
              </Card>
            </Col>{" "}
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Total Orders Wait
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <a href="/employees">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                      </a>
                    </Col>
                  </Row>{" "}
                  <p className="mt-3 mb-0 text-muted text-sm"></p>
                </CardBody>
              </Card>
            </Col>{" "}
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Total Orders
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <a href="/employees">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                      </a>
                    </Col>
                  </Row>{" "}
                  <p className="mt-3 mb-0 text-muted text-sm"></p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OrderHeader;
