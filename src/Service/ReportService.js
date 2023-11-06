import axios from "../axios";

//Get Report SKU By CompanyId And ProjectId
const getSkuByCompanyIdAndProjectId = (companyId, projectId) => {
  return axios.get(`/report/sku/${companyId}/${projectId}`);
};

//Get ReportOrderDetail By CompanyId And ProjectId
const getOrderDetailByCompanyIdAndProjectId = (companyId, projId) => {
  return axios.get(`/report/orders/${companyId}/${projId}`);
};

const ReportService = {
  getSkuByCompanyIdAndProjectId,
  getOrderDetailByCompanyIdAndProjectId,
};

export default ReportService;
