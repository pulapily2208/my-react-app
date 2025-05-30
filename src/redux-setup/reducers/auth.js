import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  login: {
    currentCustomer: null,
    loggedIn: false,
    error: false,
  },
};
const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.login.currentCustomer = action.payload;
      state.login.loggedIn = true;
    },
    logoutSuccess: (state, action) => {
      state.login.loggedIn = false;
      state.login.currentCustomer = null;
    },
    updateSuccess: (state, action) => {},
    updateTokenSuccess: (state, action) => {},
    
    updatedCustomer: (state, action) => {
      state.login.currentCustomer.customer.fullName = action.payload.fullName;
      state.login.currentCustomer.customer.email = action.payload.email;
      state.login.currentCustomer.customer.address = action.payload.address;
    },
  },
  updateAccessToken: (state, action) => {
    state.login.currentCustomer.accessToken = action.payload.newAccessToken;
    // state.login.currentCustomer.refreshToken = action.payload.refreshToken;
   
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  updateSuccess,
  updateTokenSuccess,
  updatedCustomer,
  updateAccessToken,
} = authReducer.actions;
export default authReducer.reducer;

