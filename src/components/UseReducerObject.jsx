import { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'decrement': {
            return {
                name: state.name,
                age: state.age - 1
            }
        }
        case 'change': {
            return {
                name: action.name,
                age: state.age
            }
        }
    }
    throw Error(action.type);
}

const UseReducerObject = () => {
    const [state, dispatch] = useReducer(reducer, { name: 'Mayank', age: 21 });
    return (
        <>
            <input value={state.name} onChange={() => dispatch({ type: 'change' })} />
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment age
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement Age</button>
            <p>Age of {state.name}is {state.age}</p>
        </>
    )
}
export default UseReducerObject;