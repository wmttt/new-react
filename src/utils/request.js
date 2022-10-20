import { message } from 'antd';
import  axios from 'axios'
import { getToken } from './session';




const   service=axios.create({
    baseURL:process.env.REACT_APP_BASE_API, //如果去做了代理的话，就要用/devApi
    timeout:5000,
    headers:{ 'Content-Type': 'application/json;charset=UTF-8'},
});
        //请求拦截
        service.interceptors.request.use(function(config){
            if(getToken()){
                config.headers['AuthToken'] = getToken()  //token 传到请求头去。
            }

            return config; //在请求前。
        },function(error){
            //请求错误
            return Promise.reject(error)
        })
        //响应拦截
        service.interceptors.response.use(function(response){
            const code = response.data.code
   
            if (code !== '0000') {
                message.info(response.data.message)
              console.log(response.data.message)
              return  Promise.reject(response)
            }else{
                //对响应数据
                return response;
            }
            
        },function(error){
            return Promise.reject(error)
        })

export default service;
