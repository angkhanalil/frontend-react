import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CompanyService from "../../Service/CompanyService.js";
// reactstrap components
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const TotalUser = (props) => {
  const { projectId, companyId } = props;
  console.log(projectId, companyId);
  const [totalEmployee, setTotalEmployee] = useState(0);

  useEffect(() => {
    getEmployeesByCompanyId();
  }, [projectId, companyId]);

  const getEmployeesByCompanyId = async () => {
    await CompanyService.getEmployeesByCompanyId(`${companyId}`, 0, 10)
      .then((res) => {
        setTotalEmployee(res.headers["x-total-count"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                Customers
              </CardTitle>
              <span className="h2 font-weight-bold mb-0">{totalEmployee}</span>
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

export default TotalUser;
