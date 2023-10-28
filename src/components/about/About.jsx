import React from 'react';
import "./about.css"
import UnoAbout from '../uno/UnoAbout';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id:1,
        image: Image1,
        title: "Full Stack Dev",
        description:
            "Front-end, back-end, and databases."
    },
    {
        id: 2,
        image: Image2,
        title: "Data Science",
        description:
            "Leveraging data analysis methods and machine learning models."
    },
    {
        id: 3,
        image: Image3,
        title: "Music Production",
        description:
            "Ableton, Logic, piano, and guitar. Ambient, electronic, soundtrack, pop."
    },
];

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
                                hey, thanks for stopping by! 
                                i'm juan lucas, a computer science student at uc berkeley.
                                when i'm not coding, i'm producing music, shooting films, or practicing dance. 
                                here's hoping you and i can work together to build something meaningful!
                            </p>
                            <a href="" className="btn">download resume</a>
                        </div>

                    </div>
                </div>
            </div>
        <div className="services__title-container">
            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </section>
    )
}

export default About