import React, { useEffect, useState } from "react";
import CompanyService from "../../Service/CompanyService.js";

const Company = (props) => {
  const { companyId } = props;
  const [company, setCompany] = useState({});

  useEffect(() => {
    getCompanyByCompanyId();
  }, [companyId]);

  const getCompanyByCompanyId = () => {
    CompanyService.getCompanyByCompanyId(companyId)
      .then((res) => {
        setCompany(res.data);
      })
      .catch((err) => {
        setCompany({});
        console.log(err);
      });
  };
  return (
    <>
      <h1 className="display-2 text-white">{company.companyName}</h1>
      <p className="text-white mt-0 mb-5">{company.companyDesc}</p>
    </>
  );
};

export default Company;
