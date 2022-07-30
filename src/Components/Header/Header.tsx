import React from 'react';
import Cosmic_light from "../../img/cae3c356720e49c89f2b2009efe16e78.png";
import head from './Header.module.css'

export const Header = () => {
    return (
        <header className= {head.header}>
            <img className= {head.header_logo} src={Cosmic_light} alt={"logo_way_of_the_samurai"}/>
            <form className={head.search}>
                <label>Search:</label>
                <input type={"search"}/>
            </form>
        </header>
    );
};
