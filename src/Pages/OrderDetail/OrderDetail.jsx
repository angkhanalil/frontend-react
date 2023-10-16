import React from "react";
import Header from "../../components/Header/Header";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Progress,
} from "reactstrap";

const OrderDetail = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5"></Row>
      </Container>
    </>
  );
};

export default OrderDetail;
