import React from "react";
import Header from "../../components/Header/Header";
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
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

const Products = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col
            md="3"
            className="my-2"
            // key={index}
            // onClick={() => this.showModalImage(index)}
          >
            <Card>
              <CardImg src="https://uniform.uniformthaiwacoal.com/images/product/spiwb04-2.jpg" />
              <CardBody>
                <CardTitle>product name</CardTitle>
                <CardText>product Description</CardText>
              </CardBody>
              {/* <CardImgOverlay className="d-flex align-items-center flex-column justify-content-center text-center text-white">
                <h5 className="mb-0"> dsfdf</h5>
                <small> More Photos </small>
              </CardImgOverlay> */}
            </Card>
          </Col>
          <Col
            md="3"
            className="my-2"
            // key={index}
            // onClick={() => this.showModalImage(index)}
          >
            <Card>
              <CardImg src="https://uniform.uniformthaiwacoal.com/images/product/uniform-setl-wm-2.jpg" />
              <CardBody>
                <CardTitle>product name</CardTitle>
                <CardText>product Description</CardText>
              </CardBody>
            </Card>
          </Col>{" "}
          <Col
            md="3"
            className="my-2"
            // key={index}
            // onClick={() => this.showModalImage(index)}
          >
            <Card>
              <CardImg src="https://uniform.uniformthaiwacoal.com/images/product/spiwb04-2.jpg" />
              <CardBody>
                <CardTitle>product name</CardTitle>
                <CardText>product Description</CardText>
              </CardBody>
            </Card>
          </Col>{" "}
          <Col
            md="3"
            className="my-2"
            // key={index}
            // onClick={() => this.showModalImage(index)}
          >
            <Card>
              <CardImg src="https://uniform.uniformthaiwacoal.com/images/product/spiwb04-2.jpg" />
              <CardBody>
                <CardTitle>product name</CardTitle>
                <CardText>product Description</CardText>
                <a href="/product-details" class="btn btn-primary">
                  Details
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
