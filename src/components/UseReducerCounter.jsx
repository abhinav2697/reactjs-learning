import {useReducer} from 'react';

const reducer = (state, action)=>{
    switch (action.type) {
        
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: throw new Error();
    }
}

const UseReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h1>Counter:{state}
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            </h1>
        </>
    )
}

export default UseReducerCounter;