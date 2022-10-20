

const router=[
    {
        title:'控制台',
        icon:'home',
        key:'/dashborad'
    },
    {
       title:'养殖管理',
       icon:'laptop',
       key:'/dashborad/viewBreeding/',
       child:[
        {title:'企业信息',key:'/dashborad/viewBreeding/company-info',icon:'',},
        {title:'流通信息',key:'11',icon:'',
        child:[
         {title:'流通细节',key:'/dashborad/viewBreeding/flow-info',icon:'',},
       
        ]},
        
       ]
    },
    {
        title:'病害管理',
        icon:'laptop',
        key:'/dashborad/viewVirus/',
        child:[
         {title:'会诊管理',key:'/dashborad/viewVirus/virus-data',icon:'',},
         {title:'疾病中心',key:'/dashborad/viewVirus/virus-common',icon:'',},
        ]
     },
     {
        title:'系统管理',
        icon:'laptop',
        key:'/dashborad/viewSyatem/',
        child:[
         {title:'用户管理',key:'/dashborad/viewSyatem/user-manage',icon:'',},
         {title:'系统日志',key:'/dashborad/viewSyatem/system-log',icon:'',},
        ]
     }

]
export default router;