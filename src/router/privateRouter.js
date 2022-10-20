import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../utils/session";
//私有组件方法
 const PrivateRouter=({componment:Component,...rest })=>{

    return(
        <Route {...rest} render={routeProps=>( 
            getToken() ?  <Component {...routeProps} />:<Redirect to="/" /> )}
        />
    );
    }

    export default PrivateRouter;