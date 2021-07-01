import React, { useState } from "react";
import "./Banner.css";

function Banner() {
  const [showValue, setShowValue] = useState(false);
  const handleShowValue = () => {
    setShowValue(!showValue);
  };
  return (
    <div className="bannerContainer">
      <div className="bannerHead" onClick={handleShowValue}>
        Market Snapshot
      </div>
      <div className={showValue ? "showBannnerValue" : "bannerContent"}>
        <div className="bannerText">
          Market Cap<p>$1.46T</p>
        </div>
        <div className="bannerText">
          Exchange Volume<p>$142.19B</p>
        </div>
        <div className="bannerText">
          Assets<p>2,138</p>
        </div>
        <div className="bannerText">
          Exchanges<p>94</p>
        </div>
        <div className="bannerText">
          Markets<p>14,180</p>
        </div>
        <div className="bannerText">
          BTC DOM INDEX<p>44.5%</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
