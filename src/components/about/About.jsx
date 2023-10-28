import React from 'react';
import "./about.css"
import UnoAbout from '../uno/UnoAbout';
import Services from '../services/Services';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <div className="about__title-container">
                <h2 className="section__title">about me</h2>

                <div className="about__container grid">
                    <div className="about__img">
                    <UnoAbout />
                    </div>

                    <div className="about__data grid">
                        <div className="about__info">
                            <p className="about__description">
                                Hey! I'm Juan Lucas, an undergraduate at UC Berkeley studying computer science.
                                When I'm not coding, I'm producing music, shooting films, or practicing dance.
                                Here's hoping you and I can work together to build something this world needs!
                            </p>
                            <a href="" className="btn">download resume</a>
                        </div>

                    </div>
                </div>
            </div>
        <Services />
        </section>
    )
}

export default About