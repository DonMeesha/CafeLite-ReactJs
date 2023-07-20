import React from "react";
import "./Discover.css";
import DiscoverImage from "../../Assets/discoverimg.jpg";
import OwnerImage from "../../Assets/richard.jpg";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover__left">
        <h5>Since 1998</h5>
        <img src={DiscoverImage} alt="" />
      </div>

      <div className="discover__right">
        <span className="right__sub__title sub__title">Coffee Shop</span>
        <span className="sub__topic_two sub__topic">
          Discover the taste of real coffee
        </span>
        <p>
          In August 2015, after having graduated from university in London with
          a degree in Creative Advertising, I moved back to Sri Lanka in an
          effort to realize my entrepreneurial dream.
        </p>

        <div className="sub__right">
          <h5>Richard Ronald</h5>
          <img src={OwnerImage} alt="" />
          <div className="sub__right__text">
          <h5>Richard Ronald</h5>
          <h6>Founder of company</h6>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Discover;
