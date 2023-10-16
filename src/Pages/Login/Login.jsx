import React, { useEffect, useState } from "react";
import AuthService from "../../Service/auth.service";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(() => {
    // console.log(watch("example"));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const logintest = () => {
    console.log("TEST");
  };
  const login = async (data) => {
    console.log("LOGIN", data.username);
    // console.log(username, password);
    try {
      const response = await AuthService.login(data.username, data.password);
      console.log(response);
      window.location.href = "/company";
      // console.log(AuthService.login(data.username, data.password));
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    } finally {
    }
  };
  return (
    <>
      <div className="main-content">
        <div className="header bg-gradient-uf-info py-5">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">Uniform Management</p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent ">
                  <div className="text-muted text-center mt-2 mb-3">
                    <small>Sign in </small>
                  </div>
                  <div className="btn-wrapper text-center"></div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  {/* <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div> */}
                  <form onSubmit={handleSubmit(login)}>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>

                        <Controller
                          control={control}
                          name="username"
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
                            <Input
                              {...register("username")}
                              // aria-invalid={errors.username ? "true" : "false"}
                              onChange={onChange}
                              onBlur={onBlur}
                              placeholder="Username"
                              type="text"
                            />
                          )}
                        />
                      </InputGroup>
                      {errors.username?.message && (
                        <>{errors.username?.message}</>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>

                        <Controller
                          control={control}
                          name="password"
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
                            <Input
                              {...register("password")}
                              // aria-invalid={errors.username ? "true" : "false"}
                              onChange={onChange}
                              onBlur={onBlur}
                              placeholder="Password"
                              type="password"
                              autoComplete="password"
                            />
                          )}
                        />
                      </InputGroup>{" "}
                      {errors.password?.message && (
                        <>{errors.password?.message}</>
                      )}
                    </FormGroup>
                    <div className="text-center">
                      {/* <input type="submit" /> */}
                      <Button
                        className="my-4"
                        color="primary"
                        type="submit"
                        // href="/company"
                      >
                        Sign in
                      </Button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
