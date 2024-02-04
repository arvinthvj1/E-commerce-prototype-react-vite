import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  bestSellingData : []
};

export const counterSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    storeBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    storeBestSellingData: (state, action) => {
      state.bestSellingData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeBannerData ,storeBestSellingData} =
  counterSlice.actions;

export default counterSlice.reducer;
