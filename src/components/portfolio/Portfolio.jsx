import React, { useEffect, useState } from 'react';
import "./portfolio.css"
import Menu from './Menu';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const navigate = useNavigate();
    const { category } = useParams();

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    };

    useEffect(() => {
        if (category) {
            filterItem(category);
        } else {
            setItems(Menu);
        }
    }, [category]);

    return (
        <section className="portfolio container section" id="portfolio">
            <div className="work__title-container">
                <h2 className="section__title">recent works</h2>

                <div className="work__filters">
                    <Link to="/portfolio" className={`work__item ${!category ? "active-filter" : ""}`} onClick={() => setItems(Menu)}> all </Link>
                    <Link to="/portfolio/software" className={`work__item ${category === "software" ? "active-filter" : ""}`} onClick={() => { filterItem("software"); navigate("/portfolio/software"); }}>software</Link>
                    <Link to="/portfolio/music" className={`work__item ${category === "music" ? "active-filter" : ""}`} onClick={() => { filterItem("music"); navigate("/portfolio/music"); }}>music</Link>
                    <Link to="/portfolio/dance" className={`work__item ${category === "dance" ? "active-filter" : ""}`} onClick={() => { filterItem("dance"); navigate("/portfolio/dance"); }}>dance</Link>
                    <Link to="/portfolio/literature" className={`work__item ${category === "literature" ? "active-filter" : ""}`} onClick={() => { filterItem("literature"); navigate("/portfolio/literature"); }}>literature</Link>
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

export default Portfolio;
