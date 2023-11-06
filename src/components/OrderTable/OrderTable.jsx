import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import ProjectService from "../../Service/ProjectService";

const OrderTable = (props) => {
  const { projectId, onlineStatus, setOrderStatus, orderStausName, companyId } =
    props;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrdersByProjectIdAndStatus();
  }, [onlineStatus]);

  const getOrdersByProjectIdAndStatus = () => {
    ProjectService.getOrdersByProjectIdAndStatus(projectId, onlineStatus)
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setOrders([]);
      });
  };

  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Order No.</th>
            <th scope="col">Name</th>
            <th scope="col">Order Date</th>
            <th scope="col">Payment</th>
            <th scope="col">Net Amt.</th>
            <th scope="col">Status</th>
            <th scope="col"> action </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((ord) => {
            return (
              <tr key={ord.orderNo}>
                <th scope="row">{ord.orderNo}</th>
                <td>{ord.employeeNumber}</td>
                <td>{ord.orderDate}</td>
                <td></td>
                <td> {ord.netAmtNoVat}</td>
                <td>{ord.onlineStatusName}</td>
                <td>
                  {/* <Button color="primary" href={`/order-detail/${ord.orderNo}`}>
                    <FontAwesomeIcon icon={faFolderOpen} />
                  </Button> */}
                  <a href={`/order-detail/${companyId}/${ord.orderNo}`}>
                    <FontAwesomeIcon icon={faFolderOpen} />
                  </a>
                  {/* <Button color="primary" href="/invoice">
                    <FontAwesomeIcon icon={faFolderOpen} />
                  </Button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default OrderTable;
