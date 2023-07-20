import React from "react";
import "./Process.css";
import NumberCounter from "number-counter";
import ProcessImage from "../../Assets/process.png";

const Process = () => {
  return (
    <div className="process ">
      <div className="count">
        <div className="count-process">
        <div>
          <span>
            <NumberCounter end={3250} start={3000} delay="4" preFix="+" />
          </span>
          <span>Coffee of cups</span>
        </div>
        <div>
          <span>
            <NumberCounter end={150} start={100} delay="4" preFix="+" />
          </span>
          <span>Varities of coffee</span>
        </div>
        <div>
          <span>
            <NumberCounter end={1560} start={1400} delay="4" preFix="+" />
          </span>
          <span>Orders everyday</span>
        </div>
        </div>
        
      </div>


        <div className="coffee-made">
          <div className="coffee-made-1">
            <img src={ProcessImage} alt="" />
            <h4>Awesome aroma</h4>
          </div>
          <div className="coffee-made-2">
            <img src={ProcessImage} alt="" />
            <h4>Excellent Grinding</h4>
          </div>
          <div className="coffee-made-3">
            <img src={ProcessImage} alt="" />
            <h4>Wide assortment</h4>
          </div>
          <div className="coffee-made-4">
            <img src={ProcessImage} alt="" />
            <h4>High Quality</h4>
          
        </div>
      </div>

      
    </div>
  );
};

export default Process;
