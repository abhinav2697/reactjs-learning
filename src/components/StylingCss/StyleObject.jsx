import React from "react";
const StyleObject = () => {
    const styles = {
        color: 'white',
        fontSize: '16px',
        border: '1px solid black',
        backgroundColor: "tomato",
        padding: '10px 20px 60px 35px',
        
    };
    return (
        <div style={styles}>
            This Component has inline styles.
        </div>
    )
}

export default StyleObject;