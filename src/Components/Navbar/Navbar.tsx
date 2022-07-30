import React from 'react';
import n from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={n.nav_main}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
        </nav>
    );
};
