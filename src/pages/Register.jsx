import React, { useState } from "react";

import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Đăng ký</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Tên đăng nhập"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className=" btn secondary auth__btn" type="submit">
                    Đăng ký
                  </Button>
                </Form>
                <p>
                  Bạn đã có tài khoản <Link to={"/login"}>Đăng nhập ngay</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
