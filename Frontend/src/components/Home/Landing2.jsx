import React from "react";
import "./Home.css";
//import sampleimg from "../images/sample-icon.png";
import ProductBanner from "../../images/productBanner.png";

export default function Landing2() {
  return (
    <div className="landingtwo-container">
      {/*}
        <div className="icon-container">
          <div className="icon-div">
            <img className="icon-img" src={sampleimg} />
          </div>
          <div className="icon-div">
            <img className="icon-img" src={sampleimg} />
          </div>
          <div className="icon-div">
            <img className="icon-img" src={sampleimg} />
          </div>
          <div className="icon-div">
            <img className="icon-img" src={sampleimg} />
          </div>
        </div>
        <div>
          <div className="main2-div">
            <h2 className="main2-subheading">ABOUT US</h2>
            <h1 className="main2-heading">We count Maize Tassels With AI</h1>
          </div>
        </div>
      */}
      <div className="productBanner-div">
        <img className="productBanner" src={ProductBanner} />
      </div>
      <div className="landingtwo-div">
        <div className="landingtwo-div-left">
          <h3>ABOUT US</h3>
          <h1>We Count</h1>
          <h1>Maize Tassels</h1>
          <h1>With Ai</h1>
        </div>
        <div className="landingtwo-div-right">
          <h4>Empowering Crop Management With Maize Tassel Vision</h4>
          <p>
            At The Maize Tassel Vision, We Specialize In Using Cutting-Edge UI
            Technology To Assist Businesses In Monitoring Their Maize Crops With
            Precision. Our Mission Is To Help You Maximize Crop Yields By
            Providing Real-Time Insight Into Maize Tassel Counts, Enabling A
            Deeper Understanding Of Potential Issues. Join Us In Redefining Crop
            Management For A More Prosperous And Sustainable Future.
          </p>
        </div>
      </div>
    </div>
  );
}
