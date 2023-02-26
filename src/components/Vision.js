import React from "react";
import Video from "../assets/images/video.png";
import "../Pages/Home/Home.css";

function Vision() {
  return (
    <div className="vision-section">
      <div className="container-slider">
        <div className="vision-card">
          <div className="card-detail">
            <h6 className="vi-text">THE VISION</h6>
            <h3 className="bh-text">Behind Neat</h3>
            <h5 className="co-text">FROM CO-FOUNDERS ASHLEY & MARISSA</h5>
            <p className="co-caps">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
          <div className="video-wrap">
            <div className="img-play">
              <img src={Video} alt="vi-img" />
              <div className="play-icon">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.87135"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.7357 59.4714C46.1582 59.4714 59.4714 46.1582 59.4714 29.7357C59.4714 13.3131 46.1582 0 29.7357 0C13.3131 0 0 13.3131 0 29.7357C0 46.1582 13.3131 59.4714 29.7357 59.4714ZM23.7357 40.2521L43.7357 29.141L23.7357 18.0299V40.2521Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
