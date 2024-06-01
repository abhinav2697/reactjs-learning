import React from "react";
 const StyleExpression = () => {
    const fontSize = 16;
    return (
        <div style={{
            color: 'white',
            fontSize: `${fontSize}px`,
            border: '1px solid black',
            backgroundColor:'green',
            padding:'20px 20px 20px 20px'
        }}>
            This component has dynamic inline styling
        </div>
    )
}
export default StyleExpression;