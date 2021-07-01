import axios from "axios";
import { TABLE_DATA_SUCCESS } from "./types";

export const getCoinInfo = () => {
  return (dispatch) => {
    axios.get(`https://api.coincap.io/v2/assets`).then((res) => {
      dispatch({
        type: TABLE_DATA_SUCCESS,
        payload: res.data.data,
      });
    });
  };
};
