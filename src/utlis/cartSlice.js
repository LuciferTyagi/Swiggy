import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {
    addItem: (state, action ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
        toast.info("Increased product quantity",{
          position:"bottom-left"
        })
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempItem);
        toast.success(`${action.payload.card.info.name}Added a new product to cart`,{
          position:"bottom-left"
        })
      }
    },

    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (itemIndex !== -1) {
        // Remove the item from the array
        state.items.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
