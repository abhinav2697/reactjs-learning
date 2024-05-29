import React, { useLayoutEffect, useState } from "react";
const UseLayoutEffectHook = () => {
    const [value, setValue] = useState("Hello");

    useLayoutEffect(() => {
        console.log("useLayoutEffect is called with the value of", value);
    }, [value]);
    setTimeout(() => {
        setValue("React Use Layout Effect Hook");
    }, 2000);
    return (
        <div
            style={{
                textAlign: "center",
                margin:"auto",
            }}
        >
            <h1 style={{ color: "green" }}>{value}</h1>is the React UseLayoutEffectHook...!

        </div>
    )
};


export default UseLayoutEffectHook;