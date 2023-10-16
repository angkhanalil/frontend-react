import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const Filter = () => {
  return (
    <>
      <Row>
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">Filters</h3>
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Company
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
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Project
                    </label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                    >
                      <option value="0">Welfare</option>
                      <option value="1">Private</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Lot
                    </label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                    >
                      <option value="0">Welfare</option>
                      <option value="1">Private</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Order Type
                    </label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                    >
                      <option value="0">Welfare</option>
                      <option value="1">Private</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-username"
                    >
                      Order Status
                    </label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      defaultValue={1}
                      // value={3}
                    >
                      <option value="0">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button className="btn btn-success" style={{ margin: "auto" }}>
                  Search
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Filter;
