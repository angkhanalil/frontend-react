import axios from "../axios";

const getCompanyEmployeeByCompanyId = (companyId, pageNo, pageSize) => {
  return axios.get(
    `/employee/company/${companyId}?pageNo=${pageNo}&${pageSize}&sortBy=companyId`
  );
};
//Get Employee By EmployeeNumber
const getEmployeeByEmployeeNumber = (employeeNumber) => {
  return axios.get(`/employee/${employeeNumber}`);
};
const EmployeeService = {
  getCompanyEmployeeByCompanyId,
  getEmployeeByEmployeeNumber,
};

export default EmployeeService;
