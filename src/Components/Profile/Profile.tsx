import React from 'react';
import User_logo from "../../img/User_samurai.png";
import prof from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";

export const Profile = () => {
    return (
        <div className={prof.content}>
            <div className={prof.content_img}></div>
            <div><img className={prof.content_user_logo} src={User_logo} alt={"content_user-logo"}/></div>
            <div>Inf user</div>
            <MyPost/>
        </div>
    );
};
