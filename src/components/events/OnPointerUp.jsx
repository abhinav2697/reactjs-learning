import React, { useState } from "react";
import "./App.css";
const OnPointerUp = () => {
    const [click, setClick] = useState();
    const func = (e) => {
        if (e.button === 0) {
            setClick("Left Click");
        }
        else if (e.button === 1) {
            setClick("Middle Click");
        }
        else if (e.button === 2) {
            setClick("Right Click");

        } else {
            setClick("Undefined Click");
        }
    }
    const func1 = (event ) => {
        alert("Pointer Down Event Fired..!");
        console.log(event);
    }
    const func2 = () => {
        alert("Pointer is moving!");
    }
    const func3 = () => {
        alert("Pointer event gets cancelled");
    }
    return (
        <div className="App">
            <h1>OnPointer Hook</h1>
            <h2>Click inside the shaded area</h2>
            {
                click ? <p>{click}</p>:null
            }
            <div className="Shaded" onPointerUp={func}
                // onPointerDown={func1}
                // onPointerMove={func2}
            onPointerCancel={func3}>
                
            </div>

            
        </div>
    )
}

export default OnPointerUp;