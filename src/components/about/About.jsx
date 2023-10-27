import React from 'react';
import "./about.css"
import Image from '../../assets/avatar-2.svg'
import UnoAbout from '../uno/UnoAbout';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">about me</h2>

            <div className="about__container grid">
                <div className="about__img">
                <UnoAbout />
                </div>

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi! I'm Juan Lucas, an art and software enthusiast.
                            I was born in the Philippines, raised in Hong Kong,
                            and now I'm studying computer science @ UC Berkeley!
                        </p>
                        <a href="" className="btn">download resume</a>
                    </div>

                    <div className="about__skills grid">
                        
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Software Engineer</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Artist</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Curious</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About