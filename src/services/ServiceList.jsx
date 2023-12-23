import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Thời tiết",
        desc: "Chúng tôi sẽ dùng kinh nghiệm để dự đoán thời tiết và cập nhật thường xuyên",

    },
    {
        imgUrl: guideImg,
        title: "Hướng dẫn tốt nhất",
        desc: "Hướng dẫn viên của chúng tôi được đào tạo rất chuyên nghiệp ",

    },
    {
        imgUrl: customizationImg,
        title: "Tùy chỉnh",
        desc: "Bạn có thể tùy chỉnh được thời gian và ngày tháng trước khi đặt vé",
    },
]


const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList