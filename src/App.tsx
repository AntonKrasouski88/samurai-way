import React from 'react';
import './App.css';
import LogoSamuraiWay from "./img/way-of-the-samurai.jpg"

function App() {
    return (
        <div className={"app-wrapper"}>
            <header>
                <img src={LogoSamuraiWay} alt={"logo_way_of_the_samurai"}/>
            </header>
            <nav>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div>Main content</div>
        </div>
    );
}

    export default App;
