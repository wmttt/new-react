
const token ='token'
export function setToken(value){
    sessionStorage.setItem(token ,value)
}
export function getToken(){
    return  sessionStorage.getItem(token)
}