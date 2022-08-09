import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={"app_container"}>
                <Header/>
                <Navbar/>
                <div className={"app_container_content"}>
                    <Route path={'/profile'} component={Profile} />
                    <Route path={'/dialogs'} component ={Dialogs} />
                    <Route path ={'/news'}/>
                    <Route path = {'/music'}/>
                    <Route path={'/setting'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
