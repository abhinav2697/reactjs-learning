import React, { useState,useMemo } from "react";
const UseMemoCounter = () => {
    const [number, setNumber] = useState(0);
    const squaredNum = useMemo(() => {
        return squareNum(number)
    }, [number]);
    const [counter, setCounter] = useState(0);

    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }
    const counterHander = () => {
        setCounter(counter + 1);
    }
    return (
        <div className="UseMemoCounter">
            <h1>Welcome to UseMemoCounter Hook</h1>
            <input type="text" 
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}
            ></input>
            <div>OUTPUT:{squaredNum}</div>
            <button onClick={counterHander}>
                Counter++
            </button>
            <div>Counter:{counter}</div>
        </div>
    )
}
function squareNum(number) {
    console.log("squaring will be done...!");
    return Math.pow(number, 2);
}
export default UseMemoCounter;