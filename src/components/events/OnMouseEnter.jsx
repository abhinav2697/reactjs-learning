import React, { useState } from "react";
const OnMouseEnter = () => {
    const [isHovered, setIsHovered] = useState();
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    const textColor = isHovered ? 'red' : 'green';
    return (
        <h1 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ color: textColor }}>
            Hover over me to change text color.
        </h1>
    )
}
export default OnMouseEnter;