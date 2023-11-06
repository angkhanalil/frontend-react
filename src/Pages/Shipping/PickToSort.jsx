import React, { useEffect, useState } from "react";
import Proj from "../../Service/CompanyService";
import ProjectService from "../../Service/ProjectService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import MultiStep from "react-multistep";
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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsActive();
  }, []);
  const getProjectsActive = async () => {
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
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-5" xl="12">
            <Card className="  shadow">
              <Card.Header className="border-0">
                <div className="col">
                  <h3 className="mb-0">Order Sorter </h3>
                </div>
              </Card.Header>
              <Card.Body>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Company</th>
                      <th scope="col">Project Name</th>
                      <th scope="col">Total Orders</th>
                      <th scope="col">Total Sales</th>
                      {/* <th scope="col">Type</th> */}
                      <th scope="col">Pick</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => {
                      return (
                        <tr>
                          <th>{project.companyId}</th>
                          <th scope="row">{project.projectName}</th>
                          {/* <td>{project.targetEmployee} </td> */}
                          <td>{project.totalOrder}</td>
                          <td>{project.totalAmt}</td>
                          {/* <td>{project.projectType}</td> */}
                          <td>
                            <Button style={{ border: "0" }}>
                              <FontAwesomeIcon icon={faBoxesPacking} />
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

        <Row className="mt-5">
          <Col className="mb-5 mb-xl-5" xl="12">
            <Card>
              <Card.Body>
                <MultiStep
                  activeStep={0}
                  // prevButton={prevButton}
                  // nextButton={nextButton}
                >
                  <h1 title="Step 1">1</h1>
                  <h1 title="Step 2">2</h1>
                </MultiStep>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PickToSort;
