import React from "react";
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
import ProjectHeader from "../../components/Header/ProjectHeader";
import OrderTable from "../../components/OrderTable/OrderTable";

const ProjectOrder = () => {
  return (
    <>
      <ProjectHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Orders</h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <OrderTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectOrder;
