import React, { useEffect, useState } from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  FormGroup,
  InputGroup,
  Form,
  Input,
  InputGroupText,
  Button,
} from "reactstrap";
import Header from "../../components/Header/Header";
import CompanyService from "../../Service/CompanyService";
import EventBus from "../../common/EventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Company = () => {
  const [companys, setCompanys] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getCompanys();
  }, []);

  const getCompanys = async () => {
    await CompanyService.getCompanys()
      .then((res) => {
        console.log(res);
        setCompanys(res.data);
      })
      .catch((err) => {
        setCompanys([]);
        console.log(err);
      });
    // try {
    //   const response = await CompanyService.getCompanys();
    //   setCompanys(response.data);
    // } catch (error) {
    //   const _content =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();
    //   setCompanys(_content);
    //   if (error.response && error.response.status === 403) {
    //     EventBus.dispatch("logout");
    //   }
    // } finally {
    // }
  };

  const filteredCompany = (searchInput) => {
    // dispatch(showLoading());
    let filteredData;
    if (searchInput === "") {
      filteredData = companys;
    } else {
      filteredData = companys.filter((company) =>
        company.companyName.toString().includes(searchInput)
      );
    }
    // dispatch(unLoading());
    return filteredData;
  };
  return (
    <>
      <Header />
      {/* */}
      <Container className="mt--5  " fluid>
        <Row className="mb-3">
          <Col xl="6" md="12">
            <Button className="btn btn-info" href="/new-company">
              <FontAwesomeIcon icon={faPlus} /> Add Company
            </Button>
          </Col>
          <Col xl="6" md="12" className="d-flex">
            <Form
              className="navbar-search justify-content-end form-inline mr-3  d-md-flex"
              style={{ width: "100%" }}
            >
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative search-content">
                  {/* <InputGroupAddon addonType="prepend"> */}
                  <InputGroupText>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </InputGroupText>
                  {/* </InputGroupAddon> */}
                  <Input
                    placeholder="Search"
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          {filteredCompany(searchInput).map((comp) => {
            return (
              <Col className="mb-5 mb-xl-5" xl="3" key={comp.companyId}>
                <Card className="h-100 shadow" style={{ marginTop: "30px" }}>
                  <CardImg
                    alt="Card image cap"
                    src={comp.imageFullpath}
                    style={{
                      height: 180,
                    }}
                    top
                    width="100%"
                  />
                  <CardBody className="d-flex flex-column justify-content-between h-100">
                    <CardTitle
                      className="text-center mb-2"
                      style={{
                        fontSize: "18px",
                        borderBottom: "1px solid #000",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      {comp.companyName}
                    </CardTitle>
                    <CardText
                      className="text-center"
                      style={{
                        fontSize: "15px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      {comp.companyDesc}
                    </CardText>
                    <Button
                      style={{
                        backgroundColor: "#1B264F",
                        borderColor: "#1B264F",
                        color: "#fff",
                      }}
                      href={`/company-profile/${comp.companyId}`}
                    >
                      รายละเอียด
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}

          {/* <Col className="mb-5 mb-xl-0 " xl="3">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/9/2014/11/11103740/Logo_Supalai_2.jpg"
                style={{
                  height: 180,
                }}
                top
                width="100%"
              />

              <CardBody>
                <CardTitle tag="h5">Card Title</CardTitle>
                <CardText>This is some text within a card body.</CardText>
                <a href="/company-profile" className="btn btn-primary">
                  Go somewhere
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="3">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://companieslogo.com/img/orig/SCB.BK-478d8e61.png?t=1684403046"
                style={{
                  height: 180,
                }}
                top
                width="100%"
              />

              <CardBody>
                <CardTitle tag="h5">Card Title</CardTitle>
                <CardText>This is some text within a card body.</CardText>
                <a href="/company-profile" className="btn btn-primary">
                  Go somewhere
                </a>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Company;
