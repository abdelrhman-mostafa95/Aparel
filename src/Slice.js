import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 1,
  },
  reducers: {
    increment: (state) => {
      state.quantity += 1;
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        if (type === "increment") {
          existing.quantity += 1;
        } else if (type === "decrement" && existing.quantity > 1) {
          existing.quantity -= 1;
        }
      }
    },
    decrement: (state) => {
      if (state.quantity > 1) state.quantity -= 1;
    },
    addToCart: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.quantity = 1;
    },
  },
});

export const { increment, decrement, addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
