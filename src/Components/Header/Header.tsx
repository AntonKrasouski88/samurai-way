import React from 'react';
import head from './Header.module.css'

export const Header = () => {
    return (
        <header className= {head.header}>
            
            <form className={head.search}>
                <label>Search:</label>
                <input type={"search"}/>
            </form>
        </header>
    );
};
