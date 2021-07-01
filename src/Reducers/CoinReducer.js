let initialState = {
  loading: false,
  error: false,
  coinData: [],
};

const CoinReducerInfo = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "TABLE_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        coinData: [...action.payload],
      };

    default:
      return state;
  }
};

export default CoinReducerInfo;
