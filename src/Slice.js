import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0, 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if (state.quantity > 0) {
        state.quantity -= 1;
      }
    },
    reset: (state) => {
      state.quantity = 0;
    },
  },
});

export const { increment, decrement, reset } = cartSlice.actions;
export default cartSlice.reducer;
