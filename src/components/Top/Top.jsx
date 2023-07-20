import React from "react";
import "./Top.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Top = () => {
  return (
    <section className="top">
      <div className="top__item">
        <div className="left">
          <div className="personal">
            <h5 className="phone">+94-719989765</h5>
            <h5 className="email">support@example.com</h5>
          </div>
        </div>
        <div className="right">
          <div className="social__icons">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaTwitterSquare />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
