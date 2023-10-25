import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import Uno from '../Uno';

const Home = () => {
    return (
        <selection className="home container" id="home">
            <div className="intro">
                <Uno />
                <h1 className="home__name">juan lucas umali</h1>
                <span className="home__education">art x software
                </span>
            </div>
        </selection>
    )
}

export default Home