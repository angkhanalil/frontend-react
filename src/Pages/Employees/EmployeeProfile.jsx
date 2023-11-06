import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Company from "../../components/Header/Company";
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
  Image,
} from "react-bootstrap"; //"reactstrap";
import EmployeeService from "../../Service/EmployeeService";

const EmployeeProfile = () => {
  const { employeeNumber, companyId } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployeeByEmployeeNumber();
    getOrdersByEmployeeNumber();
  }, []);

  const getEmployeeByEmployeeNumber = () => {
    EmployeeService.getEmployeeByEmployeeNumber(employeeNumber)
      .then((res) => {
        console.log(res.data);
        setEmployee(res.data);
      })
      .catch((err) => {
        setEmployee({});
        console.log(err);
      });
  };

  const getOrdersByEmployeeNumber = () => {
    // ProjectService.getOrdersByEmployeeNumber(employeeNumber).t;
  };
  return (
    <>
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
                <Breadcrumb.Item href={`/employees-company/${companyId}`}>
                  Employees
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                >
                  Profile
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col lg={4}>
            <Card className="border-1 box-shadow">
              <Image
                src="https://uniform.uniformthaiwacoal.com/images/product/4-2.jpg"
                style={{ width: "100%", height: "10rem" }}
                className="card-img-top border-1"
                alt="..."
              />
              <div className="row justify-content-center">
                <div className="col-4 col-lg-4 order-lg-2">
                  <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                    <a href="javascript:;">
                      <Image
                        src="https://uniform.uniformthaiwacoal.com/images/product/4-2.jpg"
                        className="rounded-circle img-fluid border border-2 border-white"
                      />
                    </a>
                  </div>
                </div>
              </div>{" "}
              <Card.Header className="text-center border-0 ">
                <Button className="btn-sm">edit</Button>
              </Card.Header>
              <Card.Body className="bg-white border-1">
                <Row className="mt-2">
                  <Col lg={12}>
                    <div className="text-center ">
                      <h4>{employee.employeeNumber}</h4>
                    </div>
                  </Col>{" "}
                  <Col lg={12}>
                    <div className="text-center ">
                      <h4>{employee.nameTH}</h4>
                    </div>
                  </Col>{" "}
                  <Col lg={12}>
                    <div className="text-center ">
                      <h4>Gender: {employee.gender}</h4>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="text-center ">
                      <h4>Phone No: {employee.phoneNo}</h4>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="text-center ">
                      <h4>Email: {employee.email}</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-2">Authen</Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="border-1 box-shadow">
              <Card.Header className="border-1">
                <Row>
                  <h3 className="mb-0">History Orders</h3>
                </Row>
              </Card.Header>
              <Card.Body className="bg-white border-1">
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
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmployeeProfile;
