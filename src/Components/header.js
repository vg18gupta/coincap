import React from "react";
import ImageLoader from "./ImageLoader";
import Button from "./Button";
import Link from "./Link";
import "./header.css";

const content = [
  { type: "Coins", link: "/" },
  { type: "Exchanges", link: "https://coincap.io/exchanges" },
  { type: "Charts", link: "https://coincap.io/charts" },
  { type: "Swap", link: "https://coincap.io/swap" },
];
function Header({ handleClick, showmodal }) {
  const onhandleClick = () => {
    handleClick && handleClick();
  };
  return (
    <div className="headerContainer">
      <div className="contentSection hide-content">
        {content.map((ele, index) => {
          return (
            <Link to={ele.link}>
              <div key={index} className="contentext">
                {ele.type}
              </div>
            </Link>
          );
        })}
        <div className="contentext"></div>
      </div>
      <div className="SearchSection">
        <ImageLoader
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
          }
          height={"30"}
        />
      </div>
      <div className="imageContainer">
        <ImageLoader
          src={"https://coincap.io/static/logos/black.svg"}
          height={"30"}
        />
      </div>
      <div className="hamberger" onClick={onhandleClick}>
        {showmodal ? (
          <ImageLoader
            src={
              "https://freepikpsd.com/media/2019/10/cross-button-png-15-Png-Transparent-Images.png"
            }
            height={"30"}
          />
        ) : (
          <ImageLoader
            src={
              "https://s3.amazonaws.com/www-inside-design/uploads/2019/03/hamburgerheader-810x810.jpg"
            }
            height={"30"}
          />
        )}
      </div>
      <div className="Button">
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

export default Header;
