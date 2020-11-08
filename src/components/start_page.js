import React from 'react';
import {user} from "./globals";
import Header from "../model";

const start_page = () => {
    return (
        <div>
            <Header user={user}/>
            <header className="w3-display-container" id="home"
                    style={{width: "100vw", height: "calc(100vh)"}}
                >
            <div className='w3-display-left w3-text-white'>
                <span className='w3-jumbo w3-hide-small'>Решайте задачи с нами</span>
            </div>
            </header>
        </div>
    );
}

export default start_page;