import { useState } from "react";
// import "./App.css";
function App() {
    const [input, setInput] = useState("");
    const [name, setName] = useState("");
    const click = () => {
        setName(input);
        setInput("");

    }
    const shoot = (a,b) => {
        alert(b.type);
    }
    return (
        <div className="App">
            <h3>Welcome</h3>
            {name ? <h2>Your Name:{name}</h2> : null}
            <input type="text"
                placeholder="Enter your name..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button onClick={click}>save</button>{" "}
            <button onClick={(e)=>shoot("Thanks for shooting..!",e)}>Take the shot!</button>
        </div>
    )
}

export default App;