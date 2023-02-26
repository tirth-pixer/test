import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pantry from "../assets/images/pantry.png";
import Orleans from "../assets/images/orleans.png";
import Chicago from "../assets/images/chicago.png";
import "../Pages/Home/Home.css";
import { Link } from "react-router-dom";

function Kitchen() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToScroll: 3,
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
    <div className="kit-section">
      <div className="container-slider">
        <Slider className="slider-baskets" {...settings}>
          <div className="pr-wrap px-20">
            <div className="img-relative">
              <img src={Pantry} alt="product" />
              <div className="imgtext-wrap">
                <div className="kitchen-contain">
                  <h6 className="mini-title">Vancouver</h6>
                  <h3 className="med-title">Kid Friendly Kitchen + Pantry</h3>
                  <Link to="#" className="link-slide">
                    SEE more{" "}
                    <svg
                      className="icon-link"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.87359 1L11 4.99999M11 4.99999L6.87359 9M11 4.99999H1"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-wrap px-20">
            <div className="img-relative">
              <img src={Orleans} alt="product" />
              <div className="imgtext-wrap">
                <div className="kitchen-contain">
                  <h6 className="mini-title">NEW ORLEANS</h6>
                  <h3 className="med-title">
                    Transformed modern southern kitchen
                  </h3>
                  <Link to="#" className="link-slide">
                    SEE more{" "}
                    <svg
                      className="icon-link"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.87359 1L11 4.99999M11 4.99999L6.87359 9M11 4.99999H1"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-wrap px-20">
            <div className="img-relative">
              <img src={Chicago} alt="product" />
              <div className="imgtext-wrap">
                <div className="kitchen-contain">
                  <h6 className="mini-title">Chicago</h6>
                  <h3 className="med-title">
                    Ashley's Office and Den Redesign
                  </h3>
                  <Link to="#" className="link-slide">
                    SEE more{" "}
                    <svg
                      className="icon-link"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.87359 1L11 4.99999M11 4.99999L6.87359 9M11 4.99999H1"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-wrap px-20">
            <div className="img-relative">
              <img src={Orleans} alt="product" />
              <div className="imgtext-wrap">
                <div className="kitchen-contain">
                  <h6 className="mini-title">NEW ORLEANS</h6>
                  <h3 className="med-title">
                    Transformed modern southern kitchen
                  </h3>
                  <Link to="#" className="link-slide">
                    SEE more{" "}
                    <svg
                      className="icon-link"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.87359 1L11 4.99999M11 4.99999L6.87359 9M11 4.99999H1"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Kitchen;
