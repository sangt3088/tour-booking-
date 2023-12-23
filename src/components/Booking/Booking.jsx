import React, {useState} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    userId: "01", // later it will be dynamic
    userEmail: "example@gmail,com",
    fullName:'',
    phone: '',
    guestSize:1,
    bookAt:''
  });

  const handleChange = (e) => {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  };

  const serviceFree = 10
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFree)

  const handleClick = e => {
    e.preventDefault();
    console.log(credentials);
    navigate('/Thank-you');
  }

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/ mỗi người</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/*================ booking form ==============*/}
      <div className="booking__form">
        <h5>Thông tin</h5>
        <Form className="booking__info-form" onSubmit={handleChange}>
          <FormGroup>
            <input
              type="text"
              placeholder="Họ Và Tên"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Số Điện Thoại"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Số lượng"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Số lượng"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/*================ booking end ==============*/}

      {/*================ booking bottom ==============*/}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i class="ri-close-line"></i> 1 người
            </h5>
            <span> ${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Phí dịch vụ</h5>
            <span> ${serviceFree}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Tổng cộng</h5>
            <span> ${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
