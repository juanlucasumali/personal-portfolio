import React, { useState, useEffect } from 'react';

const UnoAbout = () => {
    return (
        <svg 
            viewBox="-5 -5 46 46" 
            fill="none" 
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            width="128" 
            height="128"
        >
            <rect x="0" y="0" width="36" height="36" fill="#f97855" rx="36"></rect>
            <g transform="translate(-7 4.5) rotate(9 50 90)">
                <path d="M13,18 a01,0.95 0 0,0 10,0" fill="#000000"></path>
                <rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
                <rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
            </g>
        </svg>
    );
};

export default UnoAbout;