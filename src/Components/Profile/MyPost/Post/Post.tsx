import React from 'react';
import logo_post from "../../../../img/Cosmic_light.png";
import post from './Post.module.css';
import {PostDataType} from './../../../../App' 

type PostType = {
    postData: Array<PostDataType>
}

export const Post = (props: PostType) => {

    const sortMessageLike = props.postData.map (i => {
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
