import React from "react";
import cx from "classnames";
import "./Button.css";

function Button({ className, color, width, height, onButtonCick, label }) {
  const handleButtonClick = () => {
    onButtonCick && onButtonCick();
  };
  return (
    <div
      onClick={handleButtonClick}
      className={cx("buttonContainer", className)}
      style={{ width: width, height: height }}
    >
      {label}
    </div>
  );
}

export default Button;
