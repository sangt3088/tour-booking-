import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonaial py-4 py-3">
        <p>
          Tôi và bạn tôi đã có chuyến đi thật sự ý nghĩa, chúng tôi có thêm kỉ
          niệm đẹp cùng nhau và tôi cảm thấy rất vui vì điều đó. Còn về dịch vụ
          tất cả mọi mặt, bản thân tôi cảm thấy hài lòng. Tôi sẽ tiếp tục ủng
          hộ!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Thanh Hằng</h6>
            <p>Khách hàng</p>
          </div>
        </div>
      </div>
      <div className="testimonaial py-4 py-3">
        <p>
          Mình tham gia Tour Đà Nẵng 3 Ngày 2 Đêm. Tuy lịch trình đôi khi trễ
          5-10 phút nhưng mình thấy không thành vấn đề vì những dịch vụ còn lại
          rất tốt và những nhân viên rất nhiệt tình.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> MS. Đài</h6>
            <p>Khách hàng </p>
          </div>
        </div>
      </div>
      <div className="testimonaial py-4 py-3">
        <p>
          Đây là chuyến đi khá thú vị, công ty chuyên nghiệp, thức ăn khá ngon
          và có nhiều hoạt động văn hóa đặc sắc.Còn về dịch vụ tất cả mọi mặt,
          bản thân tôi cảm thấy hài lòng. Tôi tiếp tục ủng hộ!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Duy Mạnh</h6>
            <p>Khách hàng </p>
          </div>
        </div>
      </div>
      <div className="testimonaial py-4 py-3">
        <p>
          Nên tăng thời gian ở chợ Vĩnh Long cho khách từ 30 phút lên 60 phút vì
          trong tour ghi là Cái Bè - Vĩnh Long mà chỉ ghé chợ Vĩnh Long 30 phút
          rồi lên xe về lại Sài Gòn.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Tuấn Hưng</h6>
            <p>Khách hàng </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
