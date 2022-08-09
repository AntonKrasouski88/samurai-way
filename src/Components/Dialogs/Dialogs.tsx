import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Item/Dialog";
import {Message} from "./Message/Message";


export const Dialogs = () => {

    let dialogs = [
        {id:1, name: "Dimcho"},
        {id:2, name: "Albert"},
        {id:3, name: "Tanya"},
        {id:4, name: "Ilan"},
    ]

    let messages = [
        {id: 1, letter: "What's up bro"},
        {id: 2, letter: "How are your it-kamasutra?"},
        {id: 3, letter: "What do yuo do?"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog dialogs = {dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messages={messages} />
            </div>
        </div>

    );
};