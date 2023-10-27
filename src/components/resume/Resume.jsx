import React from 'react';
import "./resume.css"
import Data from './Data';
import Card from './Card';

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">experience</h2>
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        return (
                            <Card 
                                key={id} 
                                icon={val.icon} 
                                title={val.title}
                                year={val.year} 
                                desc={val.desc}
                            />
                        )
                    })}
                </div>
        </section>
    )
}

export default Resume