import React from 'react';
import logo_post from "../../../../img/Cosmic_light.png";
import { StateType } from '../../../../redux/state';
import post from './Post.module.css';


type PostType = {
    postData: StateType
}

export const Post = (props: PostType) => {

    const sortMessageLike = props.postData.profilePage.postData.map (i => {
        return (
            <div className={post.item}>
                    <img src={logo_post} alt={"logo_post"}/>
                    {i.message}
                    <div>{i.like}<span> like</span></div>
                </div>
        )
    })
    
    return (
            <div>
                {sortMessageLike}
            </div>
    );
};
