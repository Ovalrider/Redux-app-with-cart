import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, changed: false};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItemToCart(state, action) {
      const payloadItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === payloadItem.id
      );
      if (!existingItem) {
        state.items.push({
          id: payloadItem.id,
          price: payloadItem.price,
          title: payloadItem.title,
          totalPrice: payloadItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + payloadItem.price;
      }
      state.changed = true
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.changed = true
      state.totalQuantity--;
    },
    replaceCart(state, action){
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    }
  },
});




export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
