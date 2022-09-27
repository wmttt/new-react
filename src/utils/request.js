import  axios from 'axios'
const   service=axios.create({
    baseURL:process.env.REACT_APP_BASE_API, //如果去做了代理的话，就要用/devApi
    timeout:5000,
    headers:{ 'Content-Type': 'application/json;charset=UTF-8'},
});
        //请求拦截
        service.interceptors.request.use(function(config){
            return config; //在请求前。
        },function(error){
            //请求错误
            return Promise.reject(error)
        })
        //响应拦截
        service.interceptors.response.use(function(response){
            //对响应数据
            return response;
        },function(error){
            return Promise.reject(error)
        })

export default service;
