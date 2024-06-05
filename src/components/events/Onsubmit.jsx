import React, { useState } from "react";
const Onsubmit = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setResult("Form has been submitted with Input:" + value);
    }
    const handleChange = (e) => {
        setValue(e.target.value);
        setResult("");
    }
    
    return (
        <div style={{ textAlign: "center", margin: "auto" }}>
            <h1 style={{ color: "Green" }}>
                Form Submission
            </h1>
            <h3>
                Example for React onsubmit handler
            </h3>
            <form onSubmit={handleSubmit}>
                <label>Add input here:</label>
                <input value={value}
                    onInput={handleChange}
                    required />
                <br />
                <br />
                <br />
                <label>Select Input:</label>
                <select 
                    value={value} 
                    onChange={handleChange} 
                > 
                    <option value={"HTML"}>HTML</option> 
                    <option value={"CSS"}>CSS</option> 
                    <option value={"JavaScript"}> 
                        JavaScript 
                    </option> 
                </select> 
                <br/><br/><br/>

                <button type="submit">Submit</button>
                
            </form><br /><br />
            <div>
                <h4>{result}</h4>
            </div>
        </div>
    )
}
export default Onsubmit;