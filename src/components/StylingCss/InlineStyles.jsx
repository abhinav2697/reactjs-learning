import React from "react";
const InlineStyles = () => {
    const styles = {
        color: 'voilet',
        borderBottom: '4px solid black',
        marginLeft: '20px'
    };
    let fontSize = '15px';
    let leftMargin = '20px';
    return (
        <>
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