import React from "react";

import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
} from "reactstrap";
import CompanyHeader from "../../components/Header/CompanyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Employees = (props) => {
  const { companyId } = useParams();
  return (
    <>
      {/* <Header desc="company" /> */}
      <CompanyHeader companyId={companyId} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Employee Infomation</h3>
                    <Button className="btn btn-info" href="">
                      <FontAwesomeIcon icon={faPlus} /> Add Employee
                    </Button>{" "}
                    <Button className="btn btn-info" href="">
                      <FontAwesomeIcon icon={faPlus} /> Import File Employee
                    </Button>
                  </div>
                  <div className="col text-right">
                    <h5>
                      Total Employee:
                      <span class="badge badge-primary">xxxx</span>
                    </h5>
                    <h5>
                      Active Employee:
                      <span class="badge badge-success">xxxx</span>
                    </h5>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Employee ID</th>
                      <th scope="col">Employee Number</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Active</th>
                      <th scope="col">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">/argon/</th>
                      <td>4,569</td>
                      <td>4,569</td>
                      <td>4,569</td>
                      <td>340</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/index.html</th>
                      <td>4,569</td>
                      <td>3,985</td>
                      <td>4,569</td>
                      <td>319</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/charts.html</th>
                      <td>4,569</td>
                      <td>3,513</td>
                      <td>294</td>
                      <td>4,569</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        36,49%
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Employees;
