import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Item/Dialog";
import {Message} from "./Message/Message";
import {StateType} from './../../redux/state'

type DialogsPropsType = {
    dialogs: StateType;
    messages: StateType;
}



export const Dialogs = (props:DialogsPropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog dialogs = {props.dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messages={props.messages} />
            </div>
        </div>

    );
};