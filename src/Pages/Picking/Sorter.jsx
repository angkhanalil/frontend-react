import React from "react";
import Header from "../../components/Header/Header";
import { Container, Row } from "reactstrap";
import Filter from "../../components/Filter/Filter";

const Sorter = () => {
  return (
    <>
      <Header />
      <Container className="mt--3" fluid>
        <Filter />
        <Row></Row>
      </Container>
    </>
  );
};

export default Sorter;
