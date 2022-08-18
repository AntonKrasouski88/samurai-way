import React from 'react';
import s from "./Message.module.css";
import {StateType} from './../../../redux/state';

type MessagePropsType = {
    messages: StateType
}


export const Message = (props:MessagePropsType) => {
    const message = props.messages.dialogsPage.messages.map(m =><div key={m.id}>{m.letter}</div>)
    return <div className={s.message}>{message}</div>
};
