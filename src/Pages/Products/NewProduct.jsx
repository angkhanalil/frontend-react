import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyService from "../../Service/CompanyService.js";
import CreateProductInfo from "../../components/Product/CreateProductInfo";
import Company from "../../components/Header/Company";
import Moment from "moment";
import tz from "moment-timezone";
import {
  Container,
  Row,
  Col,
  Card,
  // CardHeader,
  Table,
  Button,
  Nav,
  Tab,
  Form,
  Alert,
  Breadcrumb,
} from "react-bootstrap"; //"reactstrap";

const NewProduct = () => {
  const [company, setCompany] = useState({});
  const { companyId } = useParams();

  useEffect(() => {
    getCompanyByCompanyId();
  }, [companyId]);

  const getCompanyByCompanyId = async () => {
    await CompanyService.getCompanyByCompanyId(companyId)
      .then((res) => {
        setCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8   align-items-center"
        style={{
          minHeight: "500px",
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
              <Company companyId={companyId} />
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
      {/* Page content */}
      <Container className="mt--7" fluid>
        <CreateProductInfo />
      </Container>
      {/*  */}
    </>
  );
};

export default NewProduct;
