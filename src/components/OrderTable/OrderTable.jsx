import React from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const OrderTable = () => {
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
          <tr>
            <th scope="row">/argon/</th>
            <td>4,569</td>
            <td>340</td>
            <td>
              <i className="fas fa-arrow-up text-success mr-3" />
              46,53%
            </td>
            <td>s</td>
            <td>s</td>
            <td>
              <Button color="primary" href="/order">
                <FontAwesomeIcon icon={faFolderOpen} />
              </Button>
              <Button color="primary" href="/invoice">
                <FontAwesomeIcon icon={faFolderOpen} />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default OrderTable;
