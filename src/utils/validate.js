export const validate_password = /^[0-9]*$/; //随便某一个正则表达式
export const vali_email = /^[0-9]*$/; //随便某一个正则表达式

export function validate_email(value){
    return vali_email.test(value)
}