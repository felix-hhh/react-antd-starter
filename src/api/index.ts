import axios, { HttpStatusCode } from "axios";
import router from "@/router/index";
import { message } from "antd";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const [messageApi] = message.useMessage();

const instance = axios.create({
  timeout: 1000 * 60 * 2,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const store = useStore();
    const bearer = store.getToken();
    const token = bearer !== undefined ? `bearer ${bearer}` : "";
    if (token !== "" && token !== undefined) {
      config.headers.authorization = token;
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
      messageApi.error(config.data.errMsg);
      throw Error(config.data.errMsg);
    }
    return config;
  },
  (error) => {
    const response = error.response;
    if (response !== undefined && response.status === HttpStatusCode.Unauthorized) {
      router.push("/");
      return;
    }
    if (response) {
      if (response.data) {
        const errMsg = response.data.errMsg || error.message;
        messageApi.error(errMsg);
        throw Error(errMsg);
      } else {
        messageApi.error("服务器繁忙");
        throw Error("服务器繁忙");
      }
    } else {
      messageApi.error("服务器繁忙");
      throw Error("服务器繁忙");
    }
  },
);

/**
 * 取回请求url
 * @returns {string}
 */
const getBasePath = (): string | undefined => {
  return axios.defaults.baseURL;
};

/**
 * 发送post请求
 * @param url 请求地址
 * @param params 请求参数
 * @returns
 */
const sendPost = (url: string, params: object | undefined) => {
  if (params == null) {
    params = {};
  }
  return instance.post(url, params).then((res) => res.data.data);
};

const sendPut = (url: string, params: object | undefined) => {
  if (params == null) {
    params = {};
  }
  return instance.put(url, params).then((res) => res.data.data);
};

/**
 * 发送del请求
 * @param url 请求地址
 * @param params 请求参数
 */
const sendDel = (url: string, params: object | undefined) => {
  if (params == null) {
    params = {};
  }
  return instance.delete(url, {
    data: params,
  }).then((res) => res.data.data);
};

/**
 * 发送 Get 请求
 * @param url 请求地址
 * @param params 请求参数
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
const sendGet = (url: string, params: object | undefined) => {
  if (params == null) {
    params = {};
  }
  return instance.get(url, params).then((res) => res.data.data);
};

const sendPostShowMsg = (url: string, params: object, errHandler: Function | undefined) => {
  if (params == null) {
    params = {};
  }
  return instance.post(url, params).then((res) => {
    const data = res.data;
    if (data.errMsg) {
      if (errHandler) {
        errHandler();
      }
      return;
    } else {
      if (data.success) {
        const result = data.data;
        if (result === undefined || result === null) {
          return data;
        }
        return result;
      }
      return data;
    }
  });
};

export { sendGet, sendPost, sendPut, sendDel, sendPostShowMsg, getBasePath };

export default {};
