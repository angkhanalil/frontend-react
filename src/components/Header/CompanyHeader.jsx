import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompanyService from "../../Service/CompanyService.js";
import {
  faUser,
  faCartShopping,
  faCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const CompanyHeader = (props) => {
  const [company, setCompany] = useState({});
  const { companyId } = props;
  useEffect(() => {
    getCompanyByCompanyId();
  }, [companyId]);

  const getCompanyByCompanyId = () => {
    CompanyService.getCompanyByCompanyId(companyId)
      .then((res) => {
        console.log(res.data);
        setCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container d-flex align-items-center*/}
        <Container className="" fluid>
          <Row>
            <Col lg="12" md="12">
              <h1 className="display-2 text-white">{company.companyName}</h1>
              <p className="text-white mt-0 mb-5">{company.companyDesc}</p>
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit Company
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Users
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <a href={`/employees/${companyId}`}>
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                      </a>
                    </Col>
                  </Row>{" "}
                  <p className="mt-3 mb-0 text-muted text-sm">
                    {/* <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span> */}
                  </p>
                </CardBody>
              </Card>
            </Col>
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
                      <span className="h2 font-weight-bold mb-0">2,356</span>
                    </div>
                    <Col className="col-auto">
                      <a href="/orders">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                      </a>
                    </Col>
                  </Row>{" "}
                  <p className="mt-3 mb-0 text-muted text-sm">
                    {/* <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span> */}
                  </p>
                </CardBody>
              </Card>
            </Col>
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
                      <span className="h2 font-weight-bold mb-0">924</span>
                    </div>
                    <Col className="col-auto">
                      <a href="/orders">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faCheck} />
                        </div>
                      </a>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Total Orders Wait Approve
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <Col className="col-auto">
                      <a href="/orders">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faExclamation} />
                        </div>
                      </a>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CompanyHeader;
