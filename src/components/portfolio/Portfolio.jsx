import React, { useState } from 'react';
import "./portfolio.css"
import Menu from './Menu';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    }
    return (
        <section className="portfolio container section" id="portfolio">
            <div className="work__title-container">
                <h2 className="section__title">recent works</h2>

                <div className="work__filters">
                    <span className="work__item" onClick={() => setItems(Menu)}> all </span>
                    <span className="work__item" onClick={() => filterItem
                        ("software")}>software</span>
                    <span className="work__item" onClick={() => filterItem
                        ("music")}>music</span>
                    <span className="work__item" onClick={() => filterItem
                        ("dance")}>dance</span>
                    <span className="work__item" onClick={() => filterItem
                        ("literature")}>literature</span>
                </div>

                <div className="work__container grid">
                    {items.map((elem) => {
                        const {id, image, title, category} = elem;
                        
                        return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                            <img src={image} alt="" className="work__img" />
                            <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href="#" className="work__button">
                            <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                        );
                    })}
                </div>
            </div>


        </section>
    )
}

export default Portfolio