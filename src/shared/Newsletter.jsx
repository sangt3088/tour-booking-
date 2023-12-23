import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Đăng ký ngay để nhận những thông tin du lịch hữu ích.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Nhập Email của bạn" />
                <button className="btn newsletter__btn">Đăng Ký</button>
              </div>

              <p>
                Chúng tôi sẽ cung cấp những thông tin du lịch hữu ích đến với
                các bạn và những mẹo khi chúng ta tham gia vào chuyến du lịch đó
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
