import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Newyork from "../assets/images/newyork.svg";
import Today from "../assets/images/today.svg";
import Vogue from "../assets/images/vogue.svg";
import "../Pages/Home/Home.css";

function Magazine() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToScroll: 1,
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
    <div className="magazine-sec">
      <div className="container-slider">
        <div>
          <h4 className="seen-text">AS SEEN IN</h4>
        </div>
        <Slider className="slider-baskets news-dots" {...settings}>
          <div className="pr-wrap mag-px">
            <div className="new-img">
              <img src={Newyork} alt="product" />
            </div>
            <div className="times-detail">
              <h4 className="times-name">How to Banish Bathroom Clutter</h4>
            </div>
          </div>
          <div className="pr-wrap mag-px">
            <div className="new-img">
              <img src={Today} alt="product" />
            </div>
            <div className="times-detail">
              <h4 className="times-name">
                How to clear the clutter from kitchen countertops and stay
                organized
              </h4>
            </div>
          </div>
          <div className="pr-wrap mag-px">
            <div className="new-img">
              <img src={Vogue} alt="product" />
            </div>
            <div className="times-detail">
              <h4 className="times-name">
                This Valentine’s Day Calls for Practical Gifts
              </h4>
            </div>
          </div>
          <div className="pr-wrap mag-px">
            <img src={Newyork} alt="product" />
            <div className="times-detail">
              <h4 className="times-name">
                This Valentine’s Day Calls for Practical Gifts
              </h4>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Magazine;
