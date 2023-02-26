import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import B1 from "../assets/images/b1.png";
import B2 from "../assets/images/b2.png";
import B3 from "../assets/images/b3.png";
import B4 from "../assets/images/b4.png";
import B5 from "../assets/images/b5.png";
import "../Pages/Home/Home.css";

function Baskets() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-slider">
      <Slider className="slider-baskets" {...settings}>
        <div className="pr-wrap">
          <img src={B1} alt="product" />
          <div className="product-detail">
            <h4 className="p-name">Perforated Acacia Baskets</h4>
            <p className="p-size">One Size / Black</p>
            <span className="p-prize">$65.00</span>
          </div>
        </div>
        <div className="pr-wrap">
          <img src={B2} alt="product" />
          <div className="product-detail">
            <h4 className="p-name">Perforated Acacia Baskets</h4>
            <p className="p-size">One Size / Black</p>
            <span className="p-prize">$65.00</span>
          </div>
        </div>
        <div className="pr-wrap">
          <img src={B3} alt="product" />
          <div className="product-detail">
            <h4 className="p-name">Perforated Acacia Baskets</h4>
            <p className="p-size">One Size / Black</p>
            <span className="p-prize">$65.00</span>
          </div>
        </div>
        <div className="pr-wrap">
          <img src={B4} alt="product" />
          <div className="product-detail">
            <h4 className="p-name">Perforated Acacia Baskets</h4>
            <p className="p-size">One Size / Black</p>
            <span className="p-prize">$65.00</span>
          </div>
        </div>
        <div className="pr-wrap">
          <img src={B5} alt="product" />
          <div className="product-detail">
            <h4 className="p-name">Perforated Acacia Baskets</h4>
            <p className="p-size">One Size / Black</p>
            <span className="p-prize">$65.00</span>
          </div>
        </div>
        <div className="pr-wrap">
          <img src={B5} alt="product" />
          <div className="product-detail">
            <h4 className="p-name">Perforated Acacia Baskets</h4>
            <p className="p-size">One Size / Black</p>
            <span className="p-prize">$65.00</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Baskets;
