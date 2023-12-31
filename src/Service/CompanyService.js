import axios from "../axios";

//Get All Companys
const getCompanys = () => {
  return axios.get(`/companys`);
};
//Get Company By CompanyId
const getCompanyByCompanyId = (companyId) => {
  return axios.get(`/company/${companyId}`);
};
//Get Products By Company Id
const getProductsByCompanyId = (companyId) => {
  return axios.get(`/company/${companyId}/products`);
};

//Get Projects By Company Id
const getProjectsByCompanyId = (companyId) => {
  return axios.get(`/company/${companyId}/projects`);
};
//Get Product By Company Id And ClothingCat Id
const getProductByCompanyIdAndClothingCatId = (companyId, clothingCatId) => {
  return axios.get(`/company/${companyId}/product/${clothingCatId}`);
};

//Get Employees By Company Id
const getEmployeesByCompanyId = (companyId, pageNo, pageSize) => {
  return axios.get(
    `/company/${companyId}/employees?pageNo=${pageNo}&${pageSize}&sortBy=companyId`
  );
};

const CompanyService = {
  getCompanys,
  getProductsByCompanyId,
  getProjectsByCompanyId,
  getCompanyByCompanyId,
  getProductByCompanyIdAndClothingCatId,
  getEmployeesByCompanyId,
};

export default CompanyService;
