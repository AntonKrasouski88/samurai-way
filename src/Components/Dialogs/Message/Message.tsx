import React from 'react';
import { MessagesType } from '../../../App';
import s from "./Message.module.css";

type MessagePropsType = {
    messages: Array<MessagesType>;
}

export const Message = (props: MessagePropsType) => {
    const message = props.messages.map(m =><div key={m.id}>{m.letter}</div>)
    return <div className={s.message}>{message}</div>
};
