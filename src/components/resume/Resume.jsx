import React from 'react';
import "./resume.css"
import Data from './Data';
import Card from './Card';

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <div className="resume__title-container">
                <h2 className="section__title">experience</h2>

                <div className="resume__container grid">
                    <div className="timeline grid">
                        {Data.map((val, id) => {
                            if (val.category === "education") {
                                return (
                                    <Card 
                                        key={id} 
                                        icon={val.icon} 
                                        title={val.title}
                                        year={val.year} 
                                        desc={val.desc}
                                    />
                                )
                            }
                        })}
                    </div>

                    <div className="timeline grid">
                        {Data.map((val, index) => {
                            if (val.category === "experience") {
                                return (
                                <Card 
                                    key={index} 
                                    icon={val.icon} 
                                    title={val.title}
                                    year={val.year} 
                                    desc={val.desc}
                                />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className="resume__download">
                <a target="_blank" href="https://drive.google.com/file/d/1cxrv76EEVwCdVAfCgjyfT0CnBAxa2Rq9/view?usp=sharing" className="btn">Download Resume</a>
            </div>
        </section>
    )
}

export default Resume