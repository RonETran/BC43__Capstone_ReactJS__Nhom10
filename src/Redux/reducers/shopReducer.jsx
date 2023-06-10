import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrProduct: [],
    cart:[],
    productDetail: {}
}

const shopReducer = createSlice({
  name: "shopReducer",
  initialState,
  reducers: {
    addToCartAction: (state,action) => {
      action.payload = {...action.payload,num:1};
      let prods = state.cart;
      let prodCart = prods.find(prod => prod.id === action.payload.id);
      if(prodCart){
        prodCart.num += 1;
      }else {
        prods.push(action.payload);
      }
    },

    delProductAction: (state,action) => {
      const id = action.payload;
      state.cart = state.cart.filter(item => item.id !== id)
    }
  }
});

export const {addToCartAction,delProductAction} = shopReducer.actions

export default shopReducer.reducer
