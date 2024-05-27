import React, { useState } from "react";

const useStateHook = () => {
    const [click, setClick] = useState(0);
    const [count, setCount] = useState(0);
    const [isEven, setIsEven] = useState(false);

    return (
        <div>
            <p>You clicked {click} times</p>
            <button onClick={() => setClick(click + 1)}>
                Click me
            </button>
            <button onClick={()=>setClick(0)}>Reset Click</button>
            <p>Count:{count}</p>
            <p>{isEven ? 'Even' : 'Odd'}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setIsEven(!isEven)}>Toggle Even/Odd</button>
            <button onClick={()=>setCount(0)}>Reset Counter</button>
        </div>
    );
    
}

export default useStateHook;