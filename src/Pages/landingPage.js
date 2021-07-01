import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../Components/header";
import Table from "../Components/Table";
import Banner from "../Components/Banner";
import HumbergerModal from "../Components/Modal";
import { getCoinInfo } from "../Actions/action";

function LandingPage(props) {
  const [coin, setCoin] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { coinData } = props.data;

  useEffect(() => {
    props.getCoinInfo();
  }, []);

  const onHandleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Header handleClick={onHandleClick} showmodal={showModal} />
      <Banner />
      <Table data={coinData} />
      {showModal ? <HumbergerModal /> : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.w_data,
  };
};
const mapActionsToProps = {
  getCoinInfo: getCoinInfo,
};

export default connect(mapStateToProps, mapActionsToProps)(LandingPage);
