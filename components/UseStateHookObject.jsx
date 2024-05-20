import React, { useState } from "react";
const useStateHookObject = () => {
    const [click, setClick] = useState([]);
    const addNumber = () => {
        setClick([
            ...click,
            {
                id: click.length,
                value: Math.random() * 10
            }
        ]);
    };
    const [data, setData] = useState({
        username: '',
        password:''
    });
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [submit, submitted] = useState(false);
    const printValues = e => {
        e.preventDefault();
        setForm({
            username: data.username,
            password: data.password
        });
        submitted(true);
    };
    const updateField = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color:"red"
    })
    const updateColor = () => {
        setCar(previousState => {
            return {
                ...previousState, color: "blue"
            }
        })
        
    }

    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}>Blue</button>
            <ul>
                {
                    click.map(item => (
                        <li key={item.id}>{item.value}</li>
                        
                    ))}
                 </ul>
                <button onClick={addNumber}>
                    Click me
                </button>
           

            <form onSubmit={printValues}>
                <label>
                    Username:
                    <input 
                        value={data.username}
                        name="username"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        value={data.password}
                        name="password"
                        type="password"
                        onChange={updateField}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
            <p>{submit ? form.username : null}</p>
            <p>{submit ? form.password : null}</p>
        </div>
    )
}
export default useStateHookObject;