import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.product = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
