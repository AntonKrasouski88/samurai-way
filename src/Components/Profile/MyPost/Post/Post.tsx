import React from 'react';
import logo_post from "../../../../img/Cosmic_light.png";
import post from './Post.module.css';

type PostType = {
    message: string,
    like: number
}

export const Post = (props: PostType) => {
    return (
            <div>
                <div className={post.item}>
                    <img src={logo_post} alt={"logo_post"}/>
                    {props.message}
                    <div>{props.like}<span> like</span></div>
                </div>
            </div>
    );
};
