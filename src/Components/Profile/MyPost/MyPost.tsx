import React from 'react';
import {Post} from "./Post/Post";
import mp from './MyPost.module.css'

export const MyPost = () => {
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
                   <Post message = {"Hi, how are you?"} like = {5}/>
                   <Post message = {"It's my first post"}  like = {10}/>
                </div>
            </div>
        </div>
    );
};
