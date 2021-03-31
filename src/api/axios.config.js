import axios from "axios";
const instance = axios.create({
  // baseURL: process.env.VUE_APP_TYPE === 'gaga' ? 'https://www.gagahi.com/':'https://www.lovehottie.com/',
  baseURL: '',
  timeout: 10000,
  withCredentials: false,
  headers: {
    'Content-Type':'application/json'
  }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  console.log("request")
  console.log(config)
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  console.log("response")
  console.log(response)
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



export default instance