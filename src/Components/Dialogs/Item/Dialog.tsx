import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    dialogs: Array<dialogsType>,
}

type dialogsType = {
    name: string;
    id: number;
}


export const Dialog = (props: DialogPropsType) => {
    let dialog = props.dialogs.map((d => <div>
        <NavLink to={`/dialogs/${d.id}`}>{d.name}</NavLink>
    </div>))

    return <div className={s.dialog + " " + s.active}>{dialog}</div>
};