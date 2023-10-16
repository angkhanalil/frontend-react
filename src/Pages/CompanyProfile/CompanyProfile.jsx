import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CompanyProfile.css";
import CompanyService from "../../Service/CompanyService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CompanyHeader from "../../components/Header/CompanyHeader";
import {
  Container,
  Row,
  Col,
  Card,
  // CardHeader,
  Table,
  Button,
  // Carousel,
  // CarouselControl,
  // CarouselItem,
  // CarouselCaption,
  // CarouselIndicators,
  Nav,
  Tab,
  Form,
  Alert,
} from "react-bootstrap"; //"reactstrap";
// import { Nav, Tab } from "react-bootstrap";
const CompanyProfile = () => {
  const { companyId } = useParams();
  const [animating, setAnimating] = useState(false);
  const [products, setProducts] = useState([]);

  // const [activeIndex, setActiveIndex] = useState(0);
  // const items = [
  //   {
  //     src: "https://companieslogo.com/img/orig/SCB.BK-478d8e61.png?t=1684403046",
  //     altText: "Slide 1",
  //     caption: "Slide 1",
  //   },
  //   {
  //     src: "https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/9/2014/11/11103740/Logo_Supalai_2.jpg",
  //     altText: "Slide 2",
  //     caption: "Slide 2",
  //   },
  // ];
  // const next = () => {
  //   // if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   // if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };
  // const goToIndex = (newIndex) => {
  //   // if (animating) return;
  //   setActiveIndex(newIndex);
  // };
  // const slides = items.map((item) => {
  //   return (
  //     <CarouselItem
  //       className="custom-tag"
  //       onExiting={() => setAnimating(true)}
  //       onExited={() => setAnimating(false)}
  //       key={item.src}
  //     >
  //       <img src={item.src} alt={item.altText} style={{ width: "inherit" }} />
  //       <CarouselCaption
  //         captionText={item.caption}
  //         captionHeader={item.caption}
  //       />
  //     </CarouselItem>
  //   );
  // });

  useEffect(() => {
    getProductsByCompanyId();
  }, []);

  const getProductsByCompanyId = async () => {
    await CompanyService.getProductsByCompanyId(companyId)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setProducts([]);
      });
  };
  return (
    <>
      <CompanyHeader companyId={companyId} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-5" xl="4">
            <Card className="  shadow">
              <Card.Header className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Products</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Create New Product
                    </Button>
                  </div>
                </Row>
              </Card.Header>
              <Card.Body style={{ maxHeight: "400px", overflow: "auto" }}>
                {products.length > 0 ? (
                  <>
                    {" "}
                    <ul className="list-group">
                      {products.map((product) => {
                        return (
                          <li
                            key={product.clothingCatId}
                            className="list-group-item  d-flex justify-between"
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
                                  // src={product.imageCover}
                                  src={product.imageCover}
                                />
                              </a>
                              <b style={{ padding: "5px" }}>
                                {product.clothingCatName}
                              </b>
                            </div>
                            <div>
                              <Button
                                className="btn"
                                href={`/product-details/${companyId}/${product.clothingCatId}`}
                              >
                                <FontAwesomeIcon icon={faArrowRight} />
                              </Button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <>
                    <Alert
                      key="warning"
                      variant="warning"
                      className="alert-warning"
                    >
                      Product Not Found!
                    </Alert>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <Card.Header className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Active Projects </h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </Card.Header>
              <Card.Body
                style={{
                  maxHeight: "400px",
                  overflow: "auto",
                  minHeight: "400px",
                }}
              >
                {" "}
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Project Name</th>
                      <th scope="col">Total Orders</th>
                      <th scope="col">Online Date</th>
                      <th scope="col">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">/argon/</th>
                      <td>4,569</td>
                      <td>340</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/index.html</th>
                      <td>3,985</td>
                      <td>319</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/charts.html</th>
                      <td>3,513</td>
                      <td>294</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        36,49%
                      </td>
                    </tr>
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

export default CompanyProfile;
