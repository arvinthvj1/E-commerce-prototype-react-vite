import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import Slider from "react-slick";

export default function ProductBanner() {
  const data = useSelector((state) => state.homeData.bannerData);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSlideData = (data) => {
    return data.map((e,index) => {
      return (
        <div key={index}>
          <Row>
            <Col xl={6}>
              <div>hi</div>
            </Col>
            <Col xl={6}>
              <div>hi</div>
              <img src={e.image}></img>
            </Col>
          </Row>
        </div>
      );
    });
  };

  return <Slider {...settings}>{renderSlideData(data)}</Slider>;
}
