import React, { useState } from "react";
import Button from "./Button";
import numeral from "numeral";
import "./Table.css";

function Table({ data }) {
  const [currentCount, setCurrentCount] = useState(50);
  const [expanded, setExpanded] = useState(false);
  const handleViewMore = () => {
    if (currentCount === 50) {
      setCurrentCount(data.length);
      setExpanded(true);
    } else {
      setCurrentCount(50);
      setExpanded(false);
    }
  };
  return (
    <div className="tableContainer">
      <table>
        <tr>
          <th className="xs-hidden">Rank</th>
          <th>Name</th>
          <th className="right-aligned">Price</th>
          <th className="xs-hidden right-aligned">Market Cap</th>
          <th className="xs-hidden right-aligned"> Volume(24Hr)</th>
          <th className="right-aligned">Charge(24Hr)</th>
        </tr>
        {data &&
          data.slice(0, currentCount).map((ele, index) => {
            return (
              <tr>
                <td className="xs-hidden center-aligned">{ele.rank}</td>
                <td className="NameTd" colSpan="2">
                  <img
                    src={`https://assets.coincap.io/assets/icons/${ele.symbol.toLowerCase()}@2x.png`}
                    width={"30"}
                    height={"30"}
                  />
                  <div className="contentText">
                    <p>{ele.name}</p>
                    <p className="symbol">{ele.symbol}</p>
                  </div>
                </td>
                <td className="right-aligned">
                  {numeral(ele.priceUsd).format("($0.00a)")}
                </td>
                <td className="xs-hidden right-aligned">
                  {numeral(ele.marketCapUsd).format("($0.00a)")}
                </td>
                <td className="xs-hidden right-aligned">
                  {numeral(ele.volumeUsd24Hr).format("($0.00a)")}
                </td>
                <td className="right-aligned">
                  {Number(ele.changePercent24Hr).toFixed(2)}%
                </td>
              </tr>
            );
          })}
      </table>
      {data && (
        <div className="ButtonClass" onClick={handleViewMore}>
          <Button
            height={"36"}
            width={"140"}
            className="buttonClass"
            label={currentCount === 50 ? "VIEW MORE" : "VIEW LESS"}
          />
        </div>
      )}
    </div>
  );
}

export default Table;
