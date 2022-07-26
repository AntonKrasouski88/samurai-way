import React from 'react';
import LogoSamuraiWay from "../img/logo_way-of-the-samurai.jpg";

export const Header = () => {
    return (
        <header className={"header"}>
            <img className={"header_logo"} src={LogoSamuraiWay} alt={"logo_way_of_the_samurai"}/>
        </header>
    );
};
