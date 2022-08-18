import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import {StateType} from './../../../redux/state'

type DialogPropsType = {
    dialogs: StateType
}

export const Dialog  = (props:DialogPropsType) => {
    let dialog = props.dialogs.dialogsPage.dialogs.map((d => <div>
        <NavLink to={`/dialogs/${d.id}`}>{d.name}</NavLink>
    </div>))

    return <div className={s.dialog + " " + s.active}>{dialog}</div>
};