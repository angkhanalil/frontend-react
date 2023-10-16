import React from "react";
import { Container, Row, Col } from "reactstrap";
const Header = (props) => {
  return (
    <>
      <div className="header bg-gradient-info pt-5 pt-md-8">
        {/* Mask  pb-8*/}
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="" fluid>
          <Row>
            <Col lg="12" md="12">
              <h1 className="display-2 text-white">{props.header}</h1>
              <p className="text-white mt-0 mb-5">{props.desc}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
