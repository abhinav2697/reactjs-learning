import React, { useState } from "react";
const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState("The content of a text area goes in the value attribute");
    const [myCar, setMyCar] = useState("Volvo");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(`The name you entered is ${name}`);
        console.log(inputs);
        
    }
    const handleChange = (event) => {
        const name = event.target.value;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        setTextarea(event.target.value);
        setMyCar(event.target.value);
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
            <input type="submit" /><br/><br/>
            <textarea value={textarea} onChange={handleChange} />
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Ford">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}
export default Form;
