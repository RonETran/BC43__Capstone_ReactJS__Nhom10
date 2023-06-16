import { createSlice } from '@reduxjs/toolkit'
import { PRODUCT_CART, saveStorageJSON } from '../../Util/config';

const initialState = {
    arrProduct: [],
    arrProductSearch: [],
    cart:[],
    productDetail: {},
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
        prodCart.num = prodCart.num + 1;
      }else {
        prods.push(action.payload);
      }
      saveStorageJSON(PRODUCT_CART,state.cart);
    },

    delProductAction: (state,action) => {
      const id = action.payload;
      state.cart = state.cart.filter(item => item.id !== id)
      saveStorageJSON(PRODUCT_CART,state.cart.filter(item => item.id !== id))
    }
  }
});

export const {addToCartAction,delProductAction} = shopReducer.actions

export default shopReducer.reducer