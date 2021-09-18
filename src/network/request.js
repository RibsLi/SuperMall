import axios from 'axios'

//创建网络请求
export function request(config) {
  const instanca = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //axios拦截器:请求拦截，响应拦截
  instanca.interceptors.request.use(config => {
    // console.log(config);
    return config
  },err => {
    // console.log(err);
  });

  //响应拦截
  instanca.interceptors.response.use(res => {
    // console.log(res);
    return res
  },err => {
    // console.log(err);
  });

  return instanca(config)
}