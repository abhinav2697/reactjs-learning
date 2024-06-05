import React, { useState } from 'react';
function OnFocus() {
    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
        setIsFocused(true);
    }
    const handleBlur = () => {
        setIsFocused(false);
    }
    return (
        <div>
            <label htmlFor='myInput'>write something:</label>
            <input type="text"
                id="myInput"
                onFocus={handleOnFocus}
                onBlur={handleBlur}
                style={{
                    backgroundColor: isFocused?'antiquewhite':'white',
                    borderRadius:"5px"
                    
                }} />
               <input 
                type="text"
                id="myInput"
                onFocus={handleOnFocus} 
                onBlur={handleBlur} 
            /> 
            {isFocused ? ( 
                <div style= 
                    { 
                        { 
                            marginTop: '7px', 
                            color: 'red'
                        } 
                    }> 
                    onFocus Active 
                </div> 
            ) : ""} 
        </div> 
    )
}
export default OnFocus;