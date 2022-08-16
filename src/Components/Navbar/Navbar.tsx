import React from 'react';
import n from './Navbar.module.css'
import Cosmic_light from "../../img/cae3c356720e49c89f2b2009efe16e78.png";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <div className={n.nav_main}>
            <div><img className= {n.header_logo} src={Cosmic_light} alt={"logo_way_of_the_samurai"}/></div>
            <nav>
                <div className={n.item}>
                    <NavLink to={'/profile'} activeClassName ={n.active}>Profile</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to={'/dialogs'} activeClassName={n.active}>Messages</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to={'/news'} activeClassName={n.active}>News</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to={'/music'} activeClassName={n.active}>Music</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to={'/settings'} activeClassName={n.active}>Settings</NavLink>
                </div>
            </nav>
        </div>
    );
};
