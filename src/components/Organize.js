import React from "react";
import Expert from "../assets/images/expert.png";
import Kitchen from "../assets/images/kitchen.svg";
import Closet from "../assets/images/Closet.svg";
import Laundry from "../assets/images/laundry.svg";
import Bath from "../assets/images/bath.svg";
import Kids from "../assets/images/kids.svg";
import "../Pages/Home/Home.css";

function Organize() {
  return (
    <div className="product-section">
      <div className="container-slider">
        <h3 className="product-text">products to organize your space</h3>
        <div className="d-flex justify-content-center">
          <div className="mx-17">
            <img src={Kitchen} alt="product-logo" />
            <h5 className="product-heading">Kitchen & Pantry</h5>
          </div>
          <div className="mx-17">
            <img src={Closet} alt="product-logo" />
            <h5 className="product-heading">Closet</h5>
          </div>
          <div className="mx-17">
            <img src={Laundry} alt="product-logo" />
            <h5 className="product-heading">Laundry & Mudroom</h5>
          </div>
          <div className="mx-17">
            <img src={Bath} alt="product-logo" />
            <h5 className="product-heading">Bath</h5>
          </div>
          <div className="mx-17">
            <img src={Kids} alt="product-logo" />
            <h5 className="product-heading">Kids</h5>
          </div>
        </div>
        <div className="expert-sec">
          <div className="expert-wrap">
            <img src={Expert} alt="expert-img" />
            <div className="card-center">
              <div className="white-card">
                <div className="card-contain">
                  <h5 className="ex-text">YOUR EXPERT</h5>
                  <h3 className="org-home">Home Organizers</h3>
                  <p className="ex-caps">
                    NEAT will take your home from chaotic to composed. Our
                    expert organizers create beautiful, sustainable systems
                    based on your needs and lifestyle.{" "}
                  </p>
                  <p className="list-org">
                    Bathrooms | Closets | Kitchens | Pantries | Playrooms |
                    Nurseries | Offices & More!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organize;
