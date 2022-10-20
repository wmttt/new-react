import request from '../../src/utils/request'
/**
 * 登录接口
 */
export function Login(data){
  return request({
        url:"/api/login/login",
        method:"post",
        data,
    })
}
/**
 * 验证码
 */
 export function GetCode(data){
  return request({
        url:"",
        method:"post",
        data,
    })
}

/**公司查询 */
export function selectcompanyListByPage(data) {
    return request({
      url:  '/api/company/page',
      method: 'post',
      data
    })
  }