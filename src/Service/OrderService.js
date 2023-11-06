import axios from "../axios";

//Get Order By orderNo
const getOrderByOrderNo = (orderNo) => {
  return axios.get(`/order/${orderNo}`);
};

const OrderService = {
  getOrderByOrderNo,
};

export default OrderService;
