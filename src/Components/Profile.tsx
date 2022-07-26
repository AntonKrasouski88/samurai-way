import React from 'react';
import User_logo from "../img/User_samurai.png";

export const Profile = () => {
    return (
        <div className={"content"}>
            <div className={"content_img-upper"}></div>
            <div><img className={"content_user-logo"} src={User_logo} alt={"content_user-logo"}/></div>
            <div>Inf user</div>
            <div>
                My post
                <div>New post</div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
};
