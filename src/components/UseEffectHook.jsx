import React, { useEffect, useState } from 'react';

const useEffectHook = () => {
    const [count, seCount] = useState(0);
    const [click, setClick] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times...!`;
    }, [count]);
    useEffect(() => {
        setTimeout(() => {
            setClick((click) + 1);
        }, 1000)
        
    },[]);
    return (<div>
        <h1>I've rendered {click} times...!</h1>
        <button onClick={() => seCount((prevCount) => prevCount + 1)}>
            Click {count} times{" "}
        </button>
    </div>
    );
}

export default useEffectHook;