import { combineReducers } from "redux";
import CoinReducerInfo from "./CoinReducer";

export default combineReducers({
  w_data: CoinReducerInfo,
});
