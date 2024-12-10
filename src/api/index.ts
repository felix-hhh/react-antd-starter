import axios, { HttpStatusCode } from "axios";
import { useUserToken } from "@/store/userStore.ts";
import { message } from "antd";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

/**
 * 发送post请求
 * @param url 请求地址
 * @param params 请求参数
 * @returns
 */
const useAxios = () => {
  const { token } = useUserToken();

  const instance = axios.create({
    timeout: 1000 * 60 * 2,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const bearer = token;
      const tokenStr = bearer !== undefined ? `bearer ${bearer}` : "";
      if (tokenStr !== "" && tokenStr !== undefined) {
        config.headers.authorization = tokenStr;
      }
      return config;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (config) => {
      if (!config.data.success) {
        message.error(config.data.errMsg);
        throw Error(config.data.errMsg);
      }
      return config;
    },
    (error) => {
      const response = error.response;
      if (response !== undefined && response.status === HttpStatusCode.Unauthorized) {
        return;
      }
      if (response) {
        if (response.data) {
          const errMsg = response.data.errMsg || error.message;
          message.error(errMsg);
          throw Error(errMsg);
        } else {
          message.error("服务器繁忙");
          throw Error("服务器繁忙");
        }
      } else {
        message.error("服务器繁忙");
        throw Error("服务器繁忙");
      }
    },
  );

  /**
   * 发送post请求
   * @param url
   * @param params
   */
  const sendPost = (url: string, params?: object) => {
    if (params == null) {
      params = {};
    }
    return instance.post(url, params).then((res) => res.data.data);
  };

  const sendGet = (url: string, params?: object) => {
    if (params == null) {
      params = {};
    }
    return instance.get(url, params).then((res) => res.data.data);
  };


  /*if (params == null) {
    params = {};
  }
  return instance.post(url, params).then((res) => res.data.data);*/

  return { sendPost,sendGet };
};


export default useAxios;

