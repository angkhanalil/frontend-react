import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CompanyProfile.css";
import CompanyService from "../../Service/CompanyService.js";
import ProjectService from "../../Service/ProjectService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CompanyHeader from "../../components/Header/CompanyHeader";
import TotalUser from "../../components/Header/TotalUser";
import TotalOrder from "../../components/Header/TotalOrder";
import Company from "../../components/Header/Company.jsx";
import TotalOrderSuccess from "../../components/Header/TotalOrderSuccess";
import TotalOrderWaitApprove from "../../components/Header/TotalOrderWaitApprove";
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
// import { Nav, Tab } from "react-bootstrap";
const CompanyProfile = () => {
  const { companyId } = useParams();
  const [animating, setAnimating] = useState(false);
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState({});
  const [orderStatus, setOrderStatus] = useState(50);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProductsByCompanyId();
    // getCompanyByCompanyId();
    // getProjectsByCompanyId();
    getProjectsActive();
  }, [companyId]);

  const getProductsByCompanyId = async () => {
    await CompanyService.getProductsByCompanyId(companyId)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setProducts([]);
      });
  };

  const getCompanyByCompanyId = async () => {
    await CompanyService.getCompanyByCompanyId(companyId)
      .then((res) => {
        setCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProjectsByCompanyId = async () => {
    await CompanyService.getProjectsByCompanyId(companyId)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProjectsActive = async () => {
    // dispatch(showLoading());
    await ProjectService.getProjectSummary()
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <CompanyHeader companyId={companyId} /> */}
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          //   backgroundImage:
          //     "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="" fluid>
          <Row>
            <Col lg="12" md="12">
              <Company companyId={companyId} />
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" className="d-flex justify-between">
              <Button
                color="info"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
              >
                Edit Company
              </Button>
              <Breadcrumb>
                <Breadcrumb.Item href="/company">Company</Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                >
                  Company Infomation
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="6" xl="3">
              <TotalUser
                companyId={companyId}
                link={`/employees-company/${companyId}`}
              />
            </Col>
            <Col lg="6" xl="3">
              <TotalOrder
                companyId={companyId}
                setOrderStatus={setOrderStatus}
              />
            </Col>
            <Col lg="6" xl="3">
              <TotalOrderSuccess
                onlineStatus={orderStatus}
                setOrderStatus={setOrderStatus}
              />
            </Col>
            <Col lg="6" xl="3">
              <TotalOrderWaitApprove setOrderStatus={setOrderStatus} />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-5" xl="4">
            <Card className="  shadow">
              <Card.Header className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Products</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href={`/new-product/${companyId}`}
                      // onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Create New Product
                    </Button>
                  </div>
                </Row>
              </Card.Header>
              <Card.Body style={{ maxHeight: "400px", overflow: "auto" }}>
                {products.length > 0 ? (
                  <>
                    {" "}
                    <ul className="list-group">
                      {products.map((product) => {
                        return (
                          <li
                            key={product.clothingCatId}
                            className="list-group-item  d-flex justify-between"
                            aria-current="true"
                          >
                            {/* //active */}
                            <div
                              className="avatar-group"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <a
                                className="avatar avatar-sm"
                                onClick={(e) => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  className="rounded-circle"
                                  // src={product.imageCover}
                                  src={product.imageCover}
                                />
                              </a>
                              <b style={{ padding: "5px" }}>
                                {product.clothingCatName}
                              </b>
                            </div>
                            <div>
                              <Button
                                href={`/product-details/${companyId}/${product.clothingCatId}`}
                              >
                                <i className="fa-solid fa-eye"></i>
                              </Button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <>
                    <Alert
                      key="warning"
                      variant="warning"
                      className="alert-warning"
                    >
                      Product Not Found!
                    </Alert>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <Card.Header className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Active Projects </h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </Card.Header>
              <Card.Body
                style={{
                  maxHeight: "400px",
                  overflow: "auto",
                  minHeight: "400px",
                }}
              >
                {" "}
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Project Name</th>
                      <th scope="col">Target Users </th>
                      <th scope="col">Total Orders</th>
                      <th scope="col">Type</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, idx) => {
                      return (
                        <tr key={project.projId}>
                          <th scope="row">
                            {project.projectName}
                            <h6>
                              <span
                                className="badge badge-pill badge-secondary"
                                style={{ fontSize: "10px", color: "#8accfb" }}
                              >
                                online date :{" "}
                                {Moment(project.onlineStartDate)
                                  .tz("Etc/GMT-0")
                                  .format("DD MMM YYYY")}{" "}
                                -{" "}
                                {Moment(project.onlineEndDate)
                                  .tz("Etc/GMT-0")
                                  .format("DD MMM YYYY")}
                              </span>
                            </h6>
                          </th>
                          <td>{project.targetEmployee}</td>
                          {/* <td>340</td> */}
                          <td>
                            {/* <i className="fas fa-arrow-up text-success mr-3" />{" "} */}
                            {project.totalOrder}
                          </td>{" "}
                          <td>
                            {/* <i className="fas fa-arrow-up text-success mr-3" />{" "} */}
                            {project.totalOrder}
                          </td>
                          <td>
                            <Button
                              style={{ border: "0" }}
                              variant="outline-light"
                              href={`/project-info/${companyId}/${project.projectId}`}
                            >
                              <i className="fa-solid fa-envelope-open"></i>
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CompanyProfile;
