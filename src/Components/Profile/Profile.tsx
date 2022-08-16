import React from 'react';
import prof from "./Profile.module.css";
import {MyPost} from "./MyPost/MyPost";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {PostDataType} from './../../App' 

type ProfilePropsType = {
    postData: Array<PostDataType>;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={prof.content}>
            <ProfileInfo/>
            <MyPost postData={props.postData}/>
        </div>
    );
};
