import React, { useState, useEffect, useRef } from 'react';

const Uno = () => {
    const svgRef = useRef(null);

    // States for the SVG positions and interactions
    const [faceCenter, setFaceCenter] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [mousePos, setMousePos] = useState(faceCenter);
    const [facePos, setFacePos] = useState({ x: 0, y: 0 });
    const [shadowPos, setShadowPos] = useState({ x: 0, y: 0 });
    const [leftEyePos, setLeftEyePos] = useState({ x: 0, y: 0 });
    const [rightEyePos, setRightEyePos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    // Track mouse movements and update mousePos state
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Update the face center based on the SVG's position
    const updateFaceCenter = () => {
        if (svgRef.current) {
            const rect = svgRef.current.getBoundingClientRect();
            setFaceCenter({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        }
    };

    useEffect(updateFaceCenter, [svgRef]);

    useEffect(() => {
        const xOffset = (mousePos.x - faceCenter.x) / window.innerWidth * 10;
        const yOffset = (mousePos.y - faceCenter.y) / window.innerHeight * 10;

        setFacePos({ x: xOffset, y: yOffset });
        setShadowPos({ x: xOffset * 0.5, y: yOffset * 0.5 - 2 });

        // Movement for eyes based on mouse direction
        const eyeLeftMultiplier = xOffset > 0 ? 0.2 : 0.2;
        const eyeRightMultiplier = xOffset > 0 ? 0.2 : 0.2;
        setLeftEyePos({ x: xOffset * eyeLeftMultiplier, y: yOffset * eyeLeftMultiplier });
        setRightEyePos({ x: xOffset * eyeRightMultiplier, y: yOffset * eyeRightMultiplier });

    }, [mousePos, faceCenter]);

    // Ensure the face center updates when the window is resized
    useEffect(() => {
        window.addEventListener('resize', updateFaceCenter);
        return () => window.removeEventListener('resize', updateFaceCenter);
    }, []);

    return (
        <svg 
            ref={svgRef} 
            viewBox="0 0 36 36" 
            fill="none" 
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            width="128" 
            height="128"
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            <mask id="faceMask" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#faceMask)">
                <rect width="36" height="36" fill="#0a0310"></rect>
                <rect x="0" y="0" width="36" height="36" transform={`translate(${shadowPos.x} ${shadowPos.y + 2}) rotate(87 18 18) scale(1)`} fill="#f97855" rx="36"></rect>
                <g transform={`translate(${facePos.x} ${facePos.y})`}>
                    {hovered ? 
                        <circle cx="18" cy="20" r="3" fill="#000000" /> : 
                        <path d="M15 18c2 1 4 1 6 0" stroke="#000000" fill="none" strokeLinecap="round"></path>
                    }
                    <rect x="10" y="15" width="1.5" height="2" rx="1" stroke="none" fill="#000000" transform={`translate(${leftEyePos.x} ${leftEyePos.y})`}></rect>
                    <rect x="24" y="15" width="1.5" height="2" rx="1" stroke="none" fill="#000000" transform={`translate(${rightEyePos.x} ${rightEyePos.y})`}></rect>
                </g>
            </g>
        </svg>
    );
};

export default Uno;
