import axios from "axios";
import store from "../redux-setup/store";
import { BASE_API } from "../shared/constants/app";
import { refeshToken } from "./Api";
import { updateAccessToken } from "../redux-setup/reducers/auth";
const Http = axios.create({
    baseURL: BASE_API,
    withCredentials: true
});

Http.interceptors.request.use(
    async (config) => {
      // lay token tu store 
      const accessToken = await store.getState().auth.login.currentCustomer
        ?.accessToken;
      if (accessToken) {
        //gui token len sever thong qua headers
        config.headers["token"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    async (error) => {
        return Promise.reject();
    }
);

Http.interceptors.response.use(
    async (response) => {
        console.log(response);
        return response;
    },
    async (error) => {
        const response = error.response;
        if (response.data === "Token expired") {
          // lấy token mới ở trên server trả về đẩy vào headers
          // Kiểm tra xem có phải là request refesh token hay không nếu có rồi thì thôi ko co thì lấy token mới
          if (response.config.url.indexOf("/customer/refeshtoken") >= 0) {
            return Promise.reject(error);
          }
          const data = (await refeshToken()).data;
          const newAccesToken = data.accessToken;
          console.log(`newAccesToken:: ${newAccesToken}`);
          store.dispatch(updateAccessToken({newAccesToken}));
          response.config.headers["token"] = `Bearer ${newAccesToken}`;
          return Http(response.config);  
        }
        return Promise.reject(error);
    }
);

export default Http;