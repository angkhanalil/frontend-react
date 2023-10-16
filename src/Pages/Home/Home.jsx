import React from "react";

import HomeHeader from "../../components/Header/HomeHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  Table,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";

const Home = () => {
  return (
    <>
      <HomeHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Active Projects Infomation</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project Name</th>
                    <th scope="col">Target Users </th>
                    <th scope="col">Total Orders</th>
                    <th scope="col">Total Sales</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
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
                            src={require("../../assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                        <b>project name</b>
                      </div>
                    </td>
                    <td>4,569</td>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <span className="badge badge-pill badge-info">
                        {/* {project.projectType} */}
                        welfare
                      </span>
                    </td>
                    <td>
                      {/* <Button color="primary" href="/project-orders">
                        <FontAwesomeIcon icon={faFolderOpen} />
                      </Button> */}
                      <Button color=" " href={`/project-info/16`}>
                        <FontAwesomeIcon icon={faFolderOpen} />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
