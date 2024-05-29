import React, { useState } from "react";
const Onscroll = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const scrollRatio = scrollTop / (scrollHeight - clientHeight);
        if (scrollRatio > 0.5) {
            setBackgroundColor("lightblue");
        } else {
            setBackgroundColor("white");
        }
    };
    return (
        <div className="scrollable-section"
            style={{
                height: "300px",
                overflow: "scroll",
                border: "1px solid #ccc",
                backgroundColor: backgroundColor,
                transition:"background-color 0.5s ease"
            }}
            onScroll={handleScroll}>
            <p style={{ paddingTop: "200px", textAlign: "center" }}>
                Scrollable Section
            </p>
            <p style={{ paddingTop: "200px" }}>
                Scrollable Section
            </p>
            <p style={{ padding: "500px" }}>
                Keep Scrolling...
            </p>
            <p style={{ paddingTop: "800px" }}>
                Background Changes on Scroll
            </p>
        </div>
    )
}

export default Onscroll;