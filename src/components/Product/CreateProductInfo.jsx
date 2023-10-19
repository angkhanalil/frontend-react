import React from "react";
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
} from "react-bootstrap";

const CreateProductInfo = () => {
  return (
    <div>
      <Col className=" " xl="12">
        <Card className="border-1 box-shadow">
          {/* <Card.Header className="bg-white border-1  shadow ">
                  <Col xs="8"></Col>
                </Card.Header> */}
          <Card.Body className="bg-white border-1">
            <Row>
              <h3 className="mb-0">Create New Product </h3>
            </Row>
            <Row className="mt-5">
              <Col xl="4">
                {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=First slide&bg=f5f5f5"
                      alt="First slide"
                    /> 
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item> 
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel> */}
              </Col>
              <Col xl="8">
                <Col lg="8">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label column sm={4} className="form-control-label">
                      Product Name
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="product name" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg="8">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label column sm={4} className="form-control-label">
                      Product Description
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg="8">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label column sm={4} className="form-control-label">
                      Product Type
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg="8">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label column sm={4} className="form-control-label">
                      Price (ex.vat)
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="product name" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col lg="8">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label column sm={4} className="form-control-label">
                      Seq.No
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="product name" />
                    </Col>
                  </Form.Group>
                </Col>{" "}
                <Col lg="8">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label column sm={4} className="form-control-label">
                      Image Cover
                    </Form.Label>
                    <Col sm={8}></Col>
                  </Form.Group>
                </Col>
              </Col>
            </Row>
            <Row>
              <Button href="/product-details/4/43">save</Button>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CreateProductInfo;
