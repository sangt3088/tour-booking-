import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/Subtitle";
import experienceImg from "../assets/images/experience.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/*================ hero section start==============*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle Subtitle={"Những điều cần biết"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Du lịch để tạo ra <span className="highlight">Kỷ Niệm</span>
                </h1>
                <p>
                  Những kỷ niệm đáng nhớ luôn là khoảnh khắc đẹp nhất trong cuộc
                  sống của chúng ta. Và đã đến lúc bạn cần lên kế hoạch cho một
                  chuyến du lịch trải nghiệm đặc biệt từ đó tạo dựng những kỷ
                  niệm khó quên.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*================ hero section start==============*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Những gì chúng tôi phục vụ</h5>
              <h2 className="services__title">
                Chúng tôi cung cấp những gì tốt nhất
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ============ featured tour section start =============*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Khám Phá"} />
              <h2 className="featured__tour-title">
                Các tour du lịch nổi tiếng{" "}
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end =============*/}

      {/* ============ experience section start ==============*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"Kinh Nghiệm"} />

                <h2>
                  Với tất cả kinh nghiệm của chúng tôi chúng tôi sẽ phục vụ bạn{" "}
                  <br />
                </h2>
                <p>
                  <br />
                Chúng tôi sẽ dùng tất cả các kinh nghiệm để mang lại cho các bạn những trải nghiệm tốt nhất 
                khi đến với Tour Du Lịch của chúng tôi
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Chuyến đi thành công</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Khách hàng thường xuyên</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Số năm kinh nghiệm</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ experience section start ==============*/}
      {/* ============ gallery section start =================*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Phòng Trưng Bày"} />
              <h2 className="gallery__title">
                Ghé thăm phòng trưng bày tour du lịch của khách hàng của chúng
                tôi
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ gallery section end ===================*/}

      {/* ============ testimonial section start ===================*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Fans Love"} />
              <h2 className="testimonial__title">Những đánh giá về chúng tôi</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============testimonial section end ===================*/}
      <Newsletter />
    </>
  );
};

export default Home;
