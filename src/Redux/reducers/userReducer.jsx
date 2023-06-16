import { createSlice } from '@reduxjs/toolkit'
import { USER_LOGIN, USER_PROFILE, getStorageJSON, http, saveStorageJSON } from '../../Util/config';
import {history} from '../../index';

const initStateUserLogin = () => {
  let userLoginInit = {
    email: "",
    accessToken: "",
  };
  if (getStorageJSON(USER_LOGIN)) {
    userLoginInit = getStorageJSON(USER_LOGIN);
  }
  return userLoginInit;
};

const initialState = {
    userLogin: initStateUserLogin(),
    userProfile: {}
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction: (state,action) => {
        const userLogin = action.payload;
        state.userLogin = userLogin;
    },
    getProfileAction: (state, action) => {
      const userProfile = action.payload;
      state.userProfile = userProfile;
    },
  }
});

export const {loginAction,getProfileAction} = userReducer.actions

export default userReducer.reducer

export const loginActionApi = (userLogin) => {
  return async (dispatch) => {
    try{
      const res = await http.post('/api/Users/signin',userLogin);
      const action = loginAction(res.data.content);
      dispatch(action);
      saveStorageJSON(USER_LOGIN,res.data.content);
      history.push('/profile');
    }
    catch(err){
      alert(err.response?.data.message);
    }
  }
};

export const getProfileActionApi = () => {
  return async (dispatch) => {
    try{
      const res = await http.post(`/api/Users/getProfile`)
      const action = getProfileAction(res.data.content);
      dispatch(action);
      saveStorageJSON(USER_PROFILE,res.data.content);
    }
    catch(err){
      return err;
    }
  };
};