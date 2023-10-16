import React from "react";
import OrderHeader from "../../components/Header/OrderHeader";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  CardBody,
  Table,
  FormGroup,
  Input,
  PaginationItem,
  Pagination,
  PaginationLink,
} from "reactstrap";
import Filter from "../../components/Filter/Filter";
import OrderTable from "../../components/OrderTable/OrderTable";

const Orders = () => {
  return (
    <>
      <OrderHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Filter />
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
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <nav aria-label="Page navigation  ">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">1</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">2</a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Orders;
