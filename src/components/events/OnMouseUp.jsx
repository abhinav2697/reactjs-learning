import React, { useState } from 'react';

const OnMouseUp = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [prevX, setPrevX] = useState(0);
    const [prevY, setPrevY] = useState(0);
    const [num, setNum] = useState(true);
    const handleDoubleClick = () => {
        setNum(num+ 2);
    }
   const handleMouseUp = () => {
       console.log('Mouse  button clicked ');
       setIsDrawing(false);
    }
    const handleMouseDown = (e) => {
        setIsDrawing(true);
        setPrevX(e.nativeEvent.offsetX);
        setPrevY(e.nativeEvent.offsetY);
        console.log('Mouse button released');
    }
    const handleMouseMove = (e) => {
        if (isDrawing) {
            const canvas = e.target;
            const context = canvas.getContext("2d");    
            const x = e.nativeEvent.offsetX;
            const y = e.nativeEvent.offsetY;
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(prevX, prevY);
            context.lineTo(x, y);
            context.stroke();
            setPrevX(x);
            setPrevY(y);

       }
      console.log("Mouse Position",e.clientX,e.clientY)  
    }
    return (
        <div onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}>
            <p>Click and hold,then release the mouse button</p>
            <h2>Simple Drawing App</h2>
            <canvas width="400"
                height="300"
                style={{ border: "1px solid black" }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                Your browser does not support the element.
            </canvas>
            <h2>Num</h2>
            <button onDoubleClick={handleDoubleClick}>Double click me</button>
            </div>
    )
}

export default OnMouseUp;