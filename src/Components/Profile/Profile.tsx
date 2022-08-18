import React from 'react';
import prof from "./Profile.module.css";
import {MyPost} from "./MyPost/MyPost";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { StateType } from '../../redux/state';


type ProfilePropsType = {
    postData: StateType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={prof.content}>
            <ProfileInfo/>
            <MyPost postData={props.postData}/>
        </div>
    );
};
