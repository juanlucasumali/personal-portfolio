import React from 'react';
import "./home.css";
import Uno from '../uno/Uno';
import HeaderSocials from './HeaderSocials';
import ScrollDown from '../scroll/ScrollDown';

const Home = () => {
    return (
        <selection className="home container section" id="home">
            <div className="intro">
                <Uno />
                <h1 className="home__name">Juan Lucas Umali</h1>
                <span className="home__education">Art x Software
                </span>
            
            <HeaderSocials />

            <ScrollDown />

            </div>
        </selection>
    )
}

export default Home