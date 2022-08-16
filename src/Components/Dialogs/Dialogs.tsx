import React from 'react';
import { DialogsType, MessagesType } from '../../App';
import s from './Dialogs.module.css'
import {Dialog} from "./Item/Dialog";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
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