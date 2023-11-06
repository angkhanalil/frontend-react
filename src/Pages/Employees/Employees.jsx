import React, { useEffect, useState } from "react";

import CompanyService from "../../Service/CompanyService.js";
import { useParams } from "react-router-dom";
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
} from "react-bootstrap";
import { FormGroup, InputGroup, Input, InputGroupText } from "reactstrap";
import CompanyHeader from "../../components/Header/CompanyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Company from "../../components/Header/Company.jsx";
import {
  faMagnifyingGlass,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import EmployeeService from "../../Service/EmployeeService";

const Employees = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [employees, setEmployees] = useState([]);
  const [totalemployee, setTotalemployee] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    // getCompanyByCompanyId();
    getEmployee();
  }, [pageNo]);

  const getEmployee = async () => {
    await EmployeeService.getCompanyEmployeeByCompanyId(
      companyId,
      pageNo,
      pageSize
    )
      .then((res) => {
        setEmployees(res.data);
        setTotalemployee(res.headers["x-total-count"]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setEmployees([]);
      });
  };
  return (
    <>
      {/* <Header desc="company" /> */}
      {/* <CompanyHeader companyId={companyId} /> */}
      <div
        className="header pb-8 pt-5 pt-lg-8   align-items-center"
        style={{
          minHeight: "400px",
          //   backgroundImage:
          //     "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        <Container className=" " fluid>
          <Row>
            <Col lg="12" md="12">
              <Company companyId={companyId} />
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" className="d-flex justify-content-end">
              <Breadcrumb>
                <Breadcrumb.Item href="/company">Company</Breadcrumb.Item>
                <Breadcrumb.Item href={`/company-profile/${companyId}`}>
                  Company Info
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                >
                  Employees
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <Card.Header className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Employees Infomation</h3>
                  </div>
                  <div className="col text-right"></div>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row className=" d-flex justify-between">
                  <Col lg={6}>
                    <Button className="btn btn-info" href="">
                      <FontAwesomeIcon icon={faPlus} /> Add Employee
                    </Button>{" "}
                    <Button className="btn btn-info" href="">
                      <FontAwesomeIcon icon={faPlus} /> Import File Employee
                    </Button>
                  </Col>
                  <Col className=" d-flex align-item-end flex-col">
                    <h5 lg={6}>
                      Total Employee:
                      <span className="badge badge-primary">
                        {totalemployee}
                      </span>
                    </h5>
                    <h5>
                      Active Employee:
                      <span className="badge badge-success">xxxx</span>
                    </h5>
                  </Col>
                </Row>
                <Row className=" mt-3">
                  <Col lg={12} className="d-flex justify-content-end">
                    {" "}
                    <Form
                      className="navbar-search justify-content-end form-inline mr-3  d-md-flex"
                      style={{ width: "100%" }}
                    >
                      <FormGroup className="mb-0">
                        <InputGroup className="input-group-alternative search-content">
                          {/* <InputGroupAddon addonType="prepend"> */}
                          <InputGroupText>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </InputGroupText>
                          {/* </InputGroupAddon> */}
                          <Input
                            placeholder="Search"
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Employee ID</th>
                      <th scope="col">Employee Number</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Active</th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, idx) => {
                      return (
                        <tr key={employee.employeeId}>
                          <th scope="row">{employee.employeeId}</th>
                          <td>{employee.employeeNumber}</td>
                          <td>{employee.nameTh}</td>
                          <td>{employee.userEmail}</td>
                          <td>{employee.verity}</td>
                          <td>
                            {/* <Button type="button" class="btn bg-gradient-info"> */}
                            <a
                              href={`/employee-profile/${companyId}/${employee.employeeNumber}`}
                            >
                              <FontAwesomeIcon icon={faUser} />
                            </a>

                            {/* </Button> */}
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

export default Employees;
