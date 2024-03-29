import React from 'react';
import {Post} from "./Post/Post";
import mp from './MyPost.module.css'
import { StateType } from '../../../redux/state';



type MyPostPropsType = {
    postData: StateType
}


export const MyPost = (props:MyPostPropsType) => {
    

    return (
        <div>
            <div>
                <h3>My post</h3>
                <div>
                    <textarea></textarea>
                    <button className={mp.button}>Add post</button>
                    <button className={mp.button}>Remove</button>
                </div>
                <div>
                   <Post postData = {props.postData} />
                </div>
            </div>
        </div>
    );
};
