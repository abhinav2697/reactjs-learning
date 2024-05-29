import React from "react";
const OnPaste = () => {
    const pasteFunction = () => {
        alert("paste event fired");
    }
    return (
        <div className="App"
            style={{
                textAlign: "center",
                color: "green",
                fontSize:"20px"
            }}>
            <h2>Hello OnPaste Event</h2>
            <input placeholder={"Paste Content here..."}
                onPaste={pasteFunction}
                style={{ padding: '10px', fontSize: "20px" }}
            />
             </div>
    )
}

export default OnPaste;