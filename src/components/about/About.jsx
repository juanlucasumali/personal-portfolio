import React from 'react';
import "./about.css";
import UnoAbout from '../uno/UnoAbout';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <div className="about__title-container">
                <h2 className="section__title">About Me</h2>

                <div className="about__container grid">
                    <div className="about__img">
                    <UnoAbout />
                    </div>

                    <div className="about__data grid">
                        <div className="about__info">
                            <p className="about__description">
                                Hey!
                                I'm Juan Lucas, a computer science student at UC Berkeley.
                                When i'm not coding, I'm producing music, shooting films, or practicing dance. 
                                Here's hoping you and I can work together to build something meaningful!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="services__title-container">
                <div className="services__container grid">
                    <div className="services__card">
                        <div className="services__img full-stack">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                <path d="m1.75 11 6.25 3.25 6.25-3.25m-12.5-3 6.25 3.25 6.25-3.25m-6.25-6.25-6.25 3.25 6.25 3.25 6.25-3.25z"/>
                            </svg>
                        </div>
                        <h3 className="services__title">Full Stack</h3>
                        <p className="services__description">
                            End-to-end web development and UI/UX design. Proficient in React, TypeScript, and PostgreSQL.
                        </p>
                    </div>
                    <div className="services__card">
                        <div className="services__img__container">
                            <div className="services__img data-science">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="ds-1" d="M9 15C8.44771 15 8 15.4477 8 16C8 16.5523 8.44771 17 9 17C9.55229 17 10 16.5523 10 16C10 15.4477 9.55229 15 9 15Z" fill="#0F0F0F"/>
                                    <path class="ds-2" d="M14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16Z" fill="#0F0F0F"/>
                                    <path class="ds-3" fill-rule="evenodd" clip-rule="evenodd" d="M12 1C10.8954 1 10 1.89543 10 3C10 3.74028 10.4022 4.38663 11 4.73244V7H6C4.34315 7 3 8.34315 3 10V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V10C21 8.34315 19.6569 7 18 7H13V4.73244C13.5978 4.38663 14 3.74028 14 3C14 1.89543 13.1046 1 12 1ZM5 10C5 9.44772 5.44772 9 6 9H7.38197L8.82918 11.8944C9.16796 12.572 9.86049 13 10.618 13H13.382C14.1395 13 14.832 12.572 15.1708 11.8944L16.618 9H18C18.5523 9 19 9.44772 19 10V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V10ZM13.382 11L14.382 9H9.61803L10.618 11H13.382Z" fill="#0F0F0F"/>
                                    <path class="ds-4" d="M1 14C0.447715 14 0 14.4477 0 15V17C0 17.5523 0.447715 18 1 18C1.55228 18 2 17.5523 2 17V15C2 14.4477 1.55228 14 1 14Z" fill="#0F0F0F"/>
                                    <path class="ds-5" d="M22 15C22 14.4477 22.4477 14 23 14C23.5523 14 24 14.4477 24 15V17C24 17.5523 23.5523 18 23 18C22.4477 18 22 17.5523 22 17V15Z" fill="#0F0F0F"/>
                                </svg>
                            </div>
                        </div>
                        <h3 className="services__title">Data Science</h3>
                        <p className="services__description">
                            Large-scale dataset analysis and custom machine learning model development using Python.
                        </p>
                    </div>
                    <div className="services__card">
                        <div className="services__img music-production">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/>
                            </svg>
                        </div>
                        <h3 className="services__title">Music Production</h3>
                        <p className="services__description">
                            Instrumental and lyrical compositions with Ableton Live 11, Logic Pro X, guitar, and piano.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
