import { useReducer } from "react";

const initialState = [
    {
        id: 1,
        title: "Todo 1",
        check: false,
    },
    {
        id: 2,
        title: "Todo 2",
        check: false,
    },
    {
        id: 3,
        title: "Todo 3",
        check: false,
    },
    {
        id: 4,
        title: "Todo 4",
        check: false,
    },
    {
        id: 5,
        title: "Todo 5",
        check: false,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "CHECK":
            return state.map((item) => {
                if (item.id === action.id) {
                    return { ...item, check: !item.check }
                }
                else {
                    return item;
                }
            });
        default: return state;
    }
};

const UseReducerTodo = () => {
    const [list, dispatch] = useReducer(reducer, initialState);
    const handleCheck = (item) => {
        dispatch({ type: "CHECK", id: item.id });
    };

    return (
        <>
            {
                list.map((item) => (
                    <div key={item.id}>
                        <label>
                            <input 
                                type="checkbox"
                                checked={item.check}
                                onChange={() => handleCheck(item)}
                            />
                            {item.title}
                        </label>
                    </div>
                ))
            }
        </>
    )
}

export default UseReducerTodo;
