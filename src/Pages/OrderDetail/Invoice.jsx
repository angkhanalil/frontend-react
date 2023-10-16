import React from "react";
import Header from "../../components/Header/Header";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Progress,
  Table,
  CardFooter,
} from "reactstrap";
import { Tab } from "bootstrap";

const Invoice = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="7" style={{ margin: "auto" }}>
            <Card className="shadow">
              <CardHeader
                className="border-0"
                style={{ backgroundColor: "#E0E7EB" }}
              >
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">ใบสั่งซื้อ/ใบเสร็จรับเงิน</h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="  mb-xl-0" xl="12">
                    <h5>หมายเลขสั่งซื้อ</h5>
                  </Col>
                  <Col className="  mb-xl-0" xl="12">
                    <h5>วันที่</h5>
                  </Col>
                  <Col className=" mb-xl-0" xl="12">
                    <h5>ชื่อ-นามสกุล :</h5>
                  </Col>
                  <Col className="  mb-xl-0" xl="12">
                    <h5>ที่อยู่ :</h5>
                  </Col>
                  <Col className="  mb-xl-0" xl="12">
                    <h5>ช่องทางการชำระเงิน :</h5>
                  </Col>
                </Row>
                <hr className="mb-2 mt-2 solid" />
                <h5>รายละเอียดสินค้าที่สั่งซื้อ</h5>
                <hr className="mb-2 mt-2" />
                <Row>
                  <Col>
                    <table cellPadding="2" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <h5>รายการ</h5>
                          </td>
                          <td>
                            <h5>ตัวเลือก</h5>
                          </td>
                          <td>
                            <h5>ราคา x จำนวน</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table cellPadding="2" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td>รายละเอียดรายการ</td>
                        </tr>
                        <tr>
                          <td>จำนวน(ชิ้น)</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>จำนวนเงินทั้งหมด</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>vat</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>ยอดชำระสุทธิ</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter
                style={{
                  backgroundColor: "#254151",
                  padding: "15px",
                  color: "white",
                  borderRadius: "0 0 20px 20px",
                }}
              >
                <table cellPadding="2" cellSpacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <h5 style={{ color: "white" }}>
                          ติดต่อ/สอบถาม รายละเอียดเพิ่มเติม
                        </h5>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <h5 style={{ color: "white" }}>
                          ฝ่าย Uniform &amp; Workwear บริษัท ไทยวาโก้ จำกัด
                          (มหาชน) 132 ซอยเจริญราษฎร์ 7 แขวงบางโคล่ เขตบางคอแหลม
                          กรุงเทพฯ 10120
                        </h5>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <h5 style={{ color: "white" }}>
                          วันจันทร์ - วันศุกร์ เวลา 08:00 - 17:00 น.
                        </h5>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td> mkt_outer@wacoal.co.th</td>
                      <td>02-289-3100 ต่อ 251, 266</td>
                    </tr>
                  </tbody>
                </table>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Invoice;
