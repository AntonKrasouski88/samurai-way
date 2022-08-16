import React from "react";
import User_logo from "../../../img/User_samurai.png";
import PI from './ProfileInfo.module.css'


export const ProfileInfo = () => {

    return (
        <div>
            <div className={PI.content_img}></div>
            <div><img className={PI.content_user_logo} src={User_logo} alt={"content_user-logo"}/></div>
            <div>Inf user</div>
        </div>
    )
}