import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TotalUser from "../../components/Header/TotalUser";
import TotalOrder from "../../components/Header/TotalOrder.jsx";
import TotalOrderSuccess from "../../components/Header/TotalOrderSuccess.jsx";
import TotalOrderWaitApprove from "../../components/Header/TotalOrderWaitApprove.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Table,
  Button,
  Carousel,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
  CarouselIndicators,
  CardBody,
} from "reactstrap";
import OrderTable from "../../components/OrderTable/OrderTable";

const ProjectInfo = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({
    projName: "Project Name",
  });
  const [company, setCompany] = useState({
    companyName: "Company Name",
  });
  const [orderSizes, setOrderSizes] = useState([]);
  const [orderStaus, setOrderStatus] = useState(10);
  const [orderStausName, setOrderStatusName] = useState("Wait Approve");
  const [products, setProducts] = useState([]);

  return (
    <>
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
        {/* Header container d-flex align-items-center*/}
        <Container className="" fluid>
          <Row>
            <Col
              lg="12"
              md="12"
              className="d-flex justify-between align-item-center"
            >
              <div>
                <h1 className="display-2 text-white"> {project.projName}</h1>
                <p className="text-white mt-0 mb-5">{company.companyName}</p>
              </div>
              <div>
                {/* <Button
                  color="info"
                  href="/project-details/16"
                  //   onClick={(e) => e.preventDefault()}
                >
                  project details
                </Button> */}
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="6" xl="3">
              <TotalUser />
            </Col>
            <Col lg="6" xl="3">
              <TotalOrder
                setOrderStatus={setOrderStatus}
                setOrderStatusName={setOrderStatusName}
              />
            </Col>
            <Col lg="6" xl="3">
              <TotalOrderSuccess
                setOrderStatus={setOrderStatus}
                setOrderStatusName={setOrderStatusName}
              />
            </Col>
            <Col lg="6" xl="3">
              <TotalOrderWaitApprove
                setOrderStatus={setOrderStatus}
                setOrderStatusName={setOrderStatusName}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-5" xl="12">
            <Card className=" shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Orders {orderStausName}</h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <OrderTable
                  projectId={projectId}
                  onlineStatus={orderStaus}
                  setOrderStatus={setOrderStatus}
                  orderStausName={orderStausName}
                />
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-5" xl="4">
            <Card className="card-profile shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Products</h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <ul className="list-group">
                  {products.map((product) => {
                    return (
                      <li
                        key={product.clothingCatId}
                        className="list-group-item  d-flex justify-content-between"
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
                              src={product.imageCover}
                              // src={require("../../assets/img/theme/team-1-800x800.jpg")}
                            />
                          </a>
                          <b style={{ padding: "5px" }}>
                            {" "}
                            {product.clothingCatName}
                          </b>
                        </div>
                        <div>
                          <Button color=" ">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </Button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-5" xl="8">
            <Card className="card-profile shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Total Material Orders </h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">SKU</th>
                      <th scope="col">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderSizes.map((size, idx) => {
                      return (
                        <tr key={idx}>
                          <th scope="row">{size.clothingCatName}</th>
                          <td>{size.sizeTwc}</td>
                          <td>{size.sku}</td>
                          <td>{size.qty}</td>
                        </tr>
                      );
                    })}
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

export default ProjectInfo;
