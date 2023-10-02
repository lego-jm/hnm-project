const initialState = {
  productList: [],
  product: null,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };

    case "GET_PRODUCT_ITEM":
      return { ...state, product: payload.data };

    default:
      return { ...state };
  }
}

export default reducer;
