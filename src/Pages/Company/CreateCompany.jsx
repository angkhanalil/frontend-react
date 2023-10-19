import React from "react";
import Header from "../../components/Header/Header";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Nav,
  Tab,
  Form,
  Alert,
  Breadcrumb,
} from "react-bootstrap"; //"reactstrap";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup
  .object({
    comanyName: yup.string().required(),
    companyDesc: yup.string().required(),
  })
  .required();

const CreateCompany = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <>
      <Header />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="mt--5" fluid>
        <Row className="justify-content-md-center">
          <Col xs lg="7">
            <Card className="shadow">
              <Card.Header className="border-0 form-control-label">
                Create New Company
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg="8">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4} className="form-control-label">
                        Company Name
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" placeholder="Company name" />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="8">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={4} className="form-control-label">
                        Company Code
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control type="text" placeholder="Company Code" />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="8">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={5} className="form-control-label">
                        Company Description
                      </Form.Label>
                      <Col sm={7}>
                        <Form.Control
                          type="text"
                          placeholder="Company Description"
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="8">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={5} className="form-control-label">
                        Company Address
                      </Form.Label>
                      <Col sm={7}>
                        <Form.Control
                          type="textarea"
                          placeholder="Company Address"
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="8">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={5} className="form-control-label">
                        Owner
                      </Form.Label>
                      <Col sm={7}>
                        <Form.Control
                          type="text"
                          placeholder="Company Address"
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="border-0 form-control-label">
                <Button href="/company-profile/4">Save</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateCompany;
