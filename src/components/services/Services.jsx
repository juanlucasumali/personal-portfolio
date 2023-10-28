import React from 'react';
import "./services.css"
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

const Services = () => {
    return <section className="services container section" id= "services">
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
    </section>;
}

export default Services