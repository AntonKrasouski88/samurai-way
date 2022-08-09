import React from 'react';
import {Post} from "./Post/Post";
import mp from './MyPost.module.css'




export const MyPost = () => {
    const postData = [
        {message:"Hi, how are you?", like: 5},
        {message:"It's my first post", like: 10},
    ]

    return (
        <div>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button className={mp.button}>Add post</button>
                    <button className={mp.button}>Remove</button>
                </div>
                <div>
                   <Post message = {postData[0].message} like = {postData[0].like}/>
                   <Post message = {"It's my first post"}  like = {10}/>
                </div>
            </div>
        </div>
    );
};
