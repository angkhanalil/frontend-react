import React from "react";
import Moment from "moment";
import tz from "moment-timezone";
import {
  Container,
  Row,
  Col,
  Card,
  // CardHeader,
  Table,
  Button,
  Nav,
  Tab,
  Form,
  Alert,
  Breadcrumb,
} from "react-bootstrap"; //"reactstrap";
const PickToSort = () => {
  return (
    <>
      {/* <div className="header bg-gradient-info pt-5 pt-md-8"></div> */}
      <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="" fluid>
          <Row>
            {/* <Col lg="12" md="12">
              <h1 className="display-2 text-white">Picking</h1>
            </Col> */}
          </Row>
          <Row>
            <Col lg="12" md="12" className="d-flex justify-between">
              <h5 className="display-2 text-white">Picking</h5>
              <Breadcrumb>
                <Breadcrumb.Item href="/pick-to-sort">
                  Pick To Sort
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                >
                  Picking
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>{" "}
      {/* Page content */}
      <Container className="mt--7" fluid></Container>
    </>
  );
};

export default PickToSort;
