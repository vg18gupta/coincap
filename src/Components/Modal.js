import React from "react";
import Button from "./Button";
import ImageLoader from "./ImageLoader";
import "./Modal.css";

function HumbergerModal() {
  return (
    <div className="humbergerModal">
      <div className="humbergerContent">
        <ImageLoader
          src={"https://assets.coincap.io/assets/icons/eth@2x.png"}
          height={"30"}
        />
        <div className="contenttext">Coins</div>
      </div>
      <div className="humbergerContent">
        <ImageLoader
          src={"https://assets.coincap.io/assets/icons/eth@2x.png"}
          height={"30"}
        />
        <div className="contenttext">Exchanges</div>
      </div>
      <div className="humbergerContent">
        <ImageLoader
          src={"https://assets.coincap.io/assets/icons/eth@2x.png"}
          height={"30"}
        />
        <div className="contenttext">Swap</div>
      </div>
      <div className="humbergerContent">
        <ImageLoader
          src={"https://assets.coincap.io/assets/icons/eth@2x.png"}
          height={"30"}
        />
        <div className="contenttext">API</div>
      </div>
      <div className="humbergerContent">
        <ImageLoader
          src={"https://assets.coincap.io/assets/icons/eth@2x.png"}
          height={"30"}
        />
        <div className="contenttext">Settings</div>
      </div>
      <div className="ButtonContent">
        <Button
          height={"36"}
          width={"140"}
          className="buttonClass"
          label={"Connect Wallet"}
        />
      </div>
    </div>
  );
}
export default HumbergerModal;
