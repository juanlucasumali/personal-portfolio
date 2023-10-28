import React from 'react'
import "./scroll.css";

const ScrollDown = () => {
    return (
        <div className="scroll__down">
            <a href="#about" className="arrow__wrapper">
                <div className="arrows">
                    <span className="arrow"></span>
                </div>
            </a>
        </div>
    )
}

export default ScrollDown