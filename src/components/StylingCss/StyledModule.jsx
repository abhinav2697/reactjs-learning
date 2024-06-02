import React from "react";
import Button from "./Button";

const StyledModule = () => {
    return (
        <div 
            style={{
                textAlign: "center",
                margin:"auto",
            }}>
            <h1 style={{ color: "green" }}>
                Styled Modules 
            </h1>
            <h3>React Styled-components example</h3>
            <Button bg="green">Click</Button>
            <Button bg="yellow">Click</Button>
            
        </div>
    )
    
}
export default StyledModule;