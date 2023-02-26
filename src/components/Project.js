import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Coffe from "../assets/images/Bitmap.png";
import Machin from "../assets/images/machin.png";
import Bottels from "../assets/images/bottels.png";
import "../Pages/Home/Home.css";

function Project() {
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
    <div className="project-section">
      <div className="container-slider">
        <div>
          <h6 className="title-shop">SHOP BY</h6>
          <h4 className="sub-title">Project</h4>
          <p className="title-caps">
            While we'd love to get our hands on each and everyone's home, we
            understand
          </p>
        </div>
        <Slider className="slider-baskets" {...settings}>
          <div className="pr-wrap px-20">
            <img src={Coffe} alt="product" />
            <div className="product-bg">
              <h4 className="coffe-name">Coffee Station</h4>
              <div className="line"></div>
              <p className="p-caps">
                Your first step in a morning routine that will encourage early
                rising.
              </p>
            </div>
          </div>
          <div className="pr-wrap px-20">
            <img src={Machin} alt="product" />
            <div className="product-bg">
              <h4 className="coffe-name">Coffee Station</h4>
              <div className="line"></div>
              <p className="p-caps">
                Your first step in a morning routine that will encourage early
                rising.
              </p>
            </div>
          </div>
          <div className="pr-wrap px-20">
            <img src={Bottels} alt="product" />
            <div className="product-bg">
              <h4 className="coffe-name">Coffee Station</h4>
              <div className="line"></div>
              <p className="p-caps">
                Your first step in a morning routine that will encourage early
                rising.
              </p>
            </div>
          </div>

          <div className="pr-wrap px-20">
            <img src={Machin} alt="product" />
            <div className="product-bg">
              <h4 className="coffe-name">Coffee Station</h4>
              <div className="line"></div>
              <p className="p-caps">
                Your first step in a morning routine that will encourage early
                rising.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Project;
