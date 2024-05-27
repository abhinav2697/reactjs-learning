import React from "react";
function OnCut() {
    const cutfunction = () => {
        alert("cut Trigger..!");
    }
    return (
        <div className="Oncut" style={{ textAlign: "center" }}>
            <h3 style={{ color: "green", fontSize: "28px" }}>
                OnCut Event
            </h3>
            <p onCut={cutfunction}>
                This is the text when user starts cut it
            </p>
        </div>
    )
}