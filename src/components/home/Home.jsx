import React from 'react';
import "./home.css";
import Uno from '../uno/Uno';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <div>
            <selection className="home container" id="home">
                <div className="intro">
                    <Uno />
                    <h1 className="home__name">juan lucas umali</h1>
                    <span className="home__education">art x software
                    </span>
                
                <HeaderSocials />

                </div>
            </selection>
        </div>
    )
}

export default Home