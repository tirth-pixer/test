import React from "react";
import "./Home.css";
import logo from "../../assets/images/logo.png";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import Baskets from "../../components/Baskets";
import Project from "../../components/Project";
import ProductDesign from "../../components/ProductDesign";
import Organize from "../../components/Organize";
import Magazine from "../../components/Magazine";
import Kitchen from "../../components/Kitchen";
import Vision from "../../components/Vision";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="announcement-bar">
        <p className="announcement-heading">
          <span className="text-uppercase">free shipping:</span> Get a little
          extra, on us – free Ground Shipping on orders $100+ for a limited
          time. Terms*
        </p>
      </div>
      <div className="hero-section">
        <div className="mb-auto">
          <div className="d-flex align-items-center justify-content-between px-40 pt-34">
            <BiSearch size={21} color="white" />
            <div className="logo-wrapper">
              <img src={logo} alt="logo" />
            </div>
            <BiUserCircle size={26} color="white" />
          </div>
          <ul className="nav-ul">
            <li className="nav-li">
              <Link className="nav-link" to={"#"}>
                SHOP
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link" to={"#"}>
                LOCATIONS
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link" to={"#"}>
                SERVICES
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link" to={"#"}>
                FRANCHISE
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link" to={"#"}>
                JOURNAL
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link" to={"#"}>
                GET IN TOUCH
              </Link>
            </li>
          </ul>
        </div>
        <div className="container mb-auto">
          <div className="hero-Wrapper">
            <h1 className="hero-text">IT’S TIME TO GET NEAT</h1>
            <h2 className="hero-caps">
              WITH 95+ LOCATIONS ACROSS THE US AND CANADA
            </h2>
            <button className="button">
              FIND AN ORGANIZER{" "}
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.57792 0.99996L12.5277 5.94971L7.57792 10.8995"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="1"
                  y1="5.94971"
                  x2="12"
                  y2="5.94971"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="basket-slider">
        <Baskets />
      </div>
      <Project />
      <ProductDesign />
      <Organize />
      <Magazine />
      <Kitchen />
      <Vision />
    </>
  );
}

export default Home;
