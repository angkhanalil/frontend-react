import React from "react";
import axios from "../../axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
// reactstrap components
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const TotalOrderWaitApprove = (props) => {
  const setStatus = (status) => {
    console.log("TotalOrderWaitApprove", status);
    props.setOrderStatus(10);
    props.setOrderStatusName("Wait Approve");
  };
  return (
    <>
      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                Wait Approve
              </CardTitle>
              <span className="h2 font-weight-bold mb-0">49,65%</span>
            </div>
            <Col className="col-auto">
              <a
                onClick={(e) => {
                  setStatus(10);
                }}
              >
                <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                  <FontAwesomeIcon icon={faExclamation} />
                </div>
              </a>
            </Col>
          </Row>
          <p className="mt-3 mb-0 text-muted text-sm">
            {/* <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span> */}
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default TotalOrderWaitApprove;
