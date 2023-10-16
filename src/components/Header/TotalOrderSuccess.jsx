import React from "react";
import axios from "../../axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// reactstrap components
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const TotalOrderSuccess = (props) => {
  const setStatus = (status) => {
    console.log("TotalOrderWaitApprove", status);
    props.setOrderStatus(status);
    props.setOrderStatusName("In Process");
  };
  return (
    <>
      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                Orders In Process
              </CardTitle>
              <span className="h2 font-weight-bold mb-0">924</span>
            </div>
            <Col className="col-auto">
              <a
                onClick={(e) => {
                  setStatus(40);
                }}
              >
                <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                  <FontAwesomeIcon icon={faCheck} />
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

export default TotalOrderSuccess;
