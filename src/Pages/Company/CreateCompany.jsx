import React from "react";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup
  .object({
    comanyName: yup.string().required(),
    companyDesc: yup.string().required(),
  })
  .required();

const CreateCompany = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <>
      <Header />
      <Container className="mt-5  " fluid></Container>
    </>
  );
};

export default CreateCompany;
