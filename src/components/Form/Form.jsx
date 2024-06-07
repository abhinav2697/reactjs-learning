import React, { useState } from "react";
const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [inputs, setInputs] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(`The name you entered is ${name}`);
        console.log(inputs);
        
    }
    const handleChange = (event) => {
        const name = event.target.value;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username||""}
                    // onChange={(e)=>setName(e.target.value)}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    value={inputs.age||""}
                    // onChange={(e)=>setAge(e.target.value)}
                    onChange={handleChange}
                />
            </label>
            <input type="submit"/>
        </form>
    )
}
export default Form;
