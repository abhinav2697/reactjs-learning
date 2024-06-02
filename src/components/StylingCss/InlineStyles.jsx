import React from "react";
import './App.css';
import styles from './my-style.module.css';
const InlineStyles = () => {
    const styles = {
        color: 'voilet',
        borderBottom: '4px solid black',
        marginLeft: '20px'
    };
    let fontSize = '15px';
    let leftMargin = '20px';

    
        const myStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily:"Sans-Serif"
        }
    
    return (
        <>
            <h2 style={{ color: "red" }}>Hello Style..!</h2>
            <h2 style={{ backgroundColor: "lightblue" }}>Hi styles...!</h2>
            <h2 style={myStyle}>Add a little Style...!</h2>
            <h2 style={styles.bigblue}>Hello Car...!</h2>
            <h1 style={styles}>
                Hello this is Inline style example
            </h1>
            <p style={{
                fontSize: `${fontSize}`,
                marginLeft: `${leftMargin}`
            }}>
                This is an Example of template literals with js expressions(Dynamic styles)
            </p>
            
        </>
    )
}
export default InlineStyles;