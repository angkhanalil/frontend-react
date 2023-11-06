import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import CompanyService from "../../Service/CompanyService.js";
import ProductService from "../../Service/ProductService";
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
import { Label } from "reactstrap";
// import {
//   Container,
//   Col,
//   Row,
//   Card,
//   CardHeader,
//   Button,
//   CardBody,
//   FormGroup,
//   Input,
//   Table,
// } from "reactstrap";

const ProductDetails = () => {
  const { companyId, productId } = useParams();
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState({});
  const [imageProduct, setImageProduct] = useState([]);
  const [company, setCompany] = useState({});
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    getProductDetail();
    getCompanyByCompanyId();
    getProductImageByClothingCatId();
  }, [productId]);
  const getCompanyByCompanyId = async () => {
    await CompanyService.getCompanyByCompanyId(companyId)
      .then((res) => {
        setCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProductDetail = () => {
    CompanyService.getProductByCompanyIdAndClothingCatId(
      companyId,
      productId
    ).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };

  const getProductImageByClothingCatId = () => {
    ProductService.getProductImageByClothingCatId(productId)
      .then((res) => {
        console.log(res.data);
        setImageProduct(res.data);
      })
      .catch((err) => {
        // console.log(err);
        setImageProduct([]);
      });
  };
  return (
    <>
      {/* <Header /> */}
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
              <h1 className="display-2 text-white">{company.companyName}</h1>
              <p className="text-white mt-0 mb-5">{company.companyDesc}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" className="d-flex justify-content-end">
              <Breadcrumb>
                <Breadcrumb.Item href="/company">Company</Breadcrumb.Item>
                <Breadcrumb.Item href={`/company-profile/${companyId}`}>
                  Product
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                >
                  Create New Product
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt--5" fluid>
        <Row>
          {/* <Col className="order-xl-1" xl="4"></Col> */}
          <Col className="order-xl-1" xl="12">
            <Card className="border-1  ">
              <Card.Header className="bg-white border-1 box-shadow ">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">{product.clothingCatName}</h3>
                  </Col>
                  <Col className="d-flex justify-content-end" xs="4">
                    <div>
                      <Tab.Container>
                        <Nav variant="pills" activeKey="1">
                          <Nav.Item>
                            <Nav.Link href="#productinfo" active>
                              Product Info
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="2">Size</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="3" title="Item">
                              Media
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Tab.Container>
                    </div>
                  </Col>
                </Row>
              </Card.Header>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className=" " xl="12">
            <div className="tab-content" id="productinfo">
              <div
                className="tab-pane fade show active"
                id="ex1-pills-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                Tab 1 content
              </div>
            </div>
            <Card className="border-1 box-shadow">
              {/* <Card.Header className="bg-white border-1  shadow ">
                  <Col xs="8"></Col>
                </Card.Header> */}
              <Card.Body className="bg-white border-1">
                <Row>
                  <h3 className="mb-0">$Product Infomation</h3>
                </Row>
                <Row className="mt-5">
                  <Col xl="4">
                    {false ? (
                      <>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="holder.js/800x400?text=First slide&bg=f5f5f5"
                              alt="First slide"
                            />
                            {/* <ExampleCarouselImage text="First slide" /> */}
                            <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            {/* <ExampleCarouselImage text="Second slide" /> */}
                            <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Label>Not Found Image</Label>
                      </>
                    )}
                  </Col>
                  <Col xl="8">
                    <Col lg="8">
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        // controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label
                          column
                          sm={4}
                          className="form-control-label"
                        >
                          Product Name
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="product name"
                            value={product.clothingCatName}
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
                        <Form.Label
                          column
                          sm={4}
                          className="form-control-label"
                        >
                          Product Description
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            as="textarea"
                            value={product.clothingDesc}
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
                        <Form.Label
                          column
                          sm={4}
                          className="form-control-label"
                        >
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
                        <Form.Label
                          column
                          sm={4}
                          className="form-control-label"
                        >
                          Price (ex.vat)
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            value={product.priceNovat}
                            placeholder="product name"
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
                        <Form.Label
                          column
                          sm={4}
                          className="form-control-label"
                        >
                          Seq.No
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="product name"
                          />
                        </Col>
                      </Form.Group>
                    </Col>{" "}
                    <Col lg="8">
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        // controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label
                          column
                          sm={4}
                          className="form-control-label"
                        >
                          Image Cover
                        </Form.Label>
                        <Col sm={8}></Col>
                      </Form.Group>
                    </Col>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className=" " xl="12">
            <Card className="border-1 box-shadow">
              {/* <Card.Header className="bg-white border-1  shadow ">
                  <Col xs="8"></Col>
                </Card.Header> */}
              <Card.Body className="bg-white border-1">
                <Row>
                  <h3 className="mb-0">$Size Infomation</h3>
                </Row>
                <Row className="mt-5">
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
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className=" " xl="12">
            <Card className="border-1 box-shadow">
              {/* <Card.Header className="bg-white border-1  shadow ">
                  <Col xs="8"></Col>
                </Card.Header> */}
              <Card.Body className="bg-white border-1">
                <Row>
                  <h3 className="mb-0">$Media Infomation</h3>
                </Row>
                <Row className="mt-5">
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
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <h6 className="heading-small text-muted mb-4">
                  Product information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Username
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="lucky.jesse"
                          id="input-username"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Email address
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          placeholder="jesse@example.com"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">
                  Formular information
                </h6>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="4">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Image Category</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row> */}
        {/* <Row>
          <Col className="mb-5 mb-xl-0 mt-5" xl="12">
            <Card className="shadow">
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Master Materials</h3>
                  </Col>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">SKU</th>
                    <th scope="col">Size</th>
                    <th scope="col">Customer Size</th>
                    <th scope="col">Display </th>
                    <th scope="col">Barcode </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                    <td>340</td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                    <td>340</td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                    <td>340</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default ProductDetails;
