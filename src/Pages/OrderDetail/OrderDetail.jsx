import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import OrderService from "../../Service/OrderService";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  Tab,
  Form,
  FloatingLabel,
  Carousel,
  Breadcrumb,
} from "react-bootstrap";

const OrderDetail = () => {
  const { orderNo, companyId } = useParams();
  const [orderDetails, setOrderDetails] = useState({});
  useEffect(() => {
    getOrderDetails();
  }, [orderNo]);

  const getOrderDetails = async () => {
    await OrderService.getOrderByOrderNo(orderNo)
      .then((res) => {
        console.log(res.data);
        setOrderDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
        setOrderDetails({});
      });
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
              <h1 className="display-2 text-white">Order</h1>
              {/* <p className="text-white mt-0 mb-5">{company.companyDesc}</p> */}
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" className="d-flex justify-content-end">
              <Breadcrumb>
                <Breadcrumb.Item href="/company">Company</Breadcrumb.Item>
                <Breadcrumb.Item href={`/company-profile/${companyId}`}>
                  Company Info
                </Breadcrumb.Item>
                {/* <Breadcrumb.Item href={`/employees-company/${companyId}`}>
                  Employees
                </Breadcrumb.Item> */}
                <Breadcrumb.Item
                  href={`/project-info/${companyId}/${orderDetails.projectId}`}
                >
                  Project Info
                </Breadcrumb.Item>
                <Breadcrumb.Item active href="#">
                  Order Info
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Card className="border-1">
            <Card.Header>
              <Row>
                <Col lg={6}>Order No: {orderNo}</Col>
                <Col lg={6}>Order Date: {orderDetails.orderDate}</Col>
              </Row>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default OrderDetail;
