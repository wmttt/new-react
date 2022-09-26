 const proxy=require("http-proxy-middleware");

module.exports=function(app){
    app.use(
        proxy("/devApi",{
        target:"http://39.101.179.181:25342", //配置多个服务器地址
        changeOrigin:true,
    }))

    // app.use(proxy("/manage/api",{   //可以配置多个服务器地址
    //     target:"http://admintest.happymmall.com:7000",
    //     changeOrigin:true,
    // }))

}