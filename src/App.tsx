import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    postData: Array<PostDataType>;
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
}

export type PostDataType = {
    message: string;
    like: number
}

export type DialogsType ={
    id: number;
    name: string;
}

export type MessagesType ={
    id: number;
    letter: string;
}


function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app_container"}>
                <Header/>
                <Navbar/>
                <div className={"app_container_content"}>
                    <Route path={'/profile'} render ={ () => <Profile postData = {props.postData}/> } />
                    <Route path={'/dialogs'} 
                    render ={ () => <Dialogs dialogs = {props.dialogs} 
                    messages = {props.messages}/>} />
                    <Route path ={'/news'}/>
                    <Route path = {'/music'}/>
                    <Route path={'/setting'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
