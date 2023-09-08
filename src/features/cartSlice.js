import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
  totalDiscount:0,
  saved:0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity = 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice, saved, totalDiscount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity,disrate } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          cartTotal.saved +=  (disrate-price)*quantity;
          cartTotal.totalDiscount=(disrate-price) / disrate*(100);
          return cartTotal;
        },
    
        {
          totalPrice: 0,
          totalQuantity: 0,
          saved:0,
          totalDiscount:0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
      state.saved = saved;
      state.totalDiscount = parseInt(totalDiscount);
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity +1 };
        }
       
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity !== 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        
        
        return item;
      });
    },
    addToWhishList: (state,action) => {
        state.cart = state.cart.map((item)=>{
            if(item.id === action.payload){
                alert(" ");
            }
            return item;
        })
    }
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  addToWhishList
} = cartSlice.actions;

export default cartSlice.reducer;