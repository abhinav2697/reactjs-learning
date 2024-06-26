import React from "react";
const cardStyles = {
    Container: {
        display: "flex",
        height: 100,
        width: 400,
        boxShadow: "0 0 3px 2px #cec7c759",
        alignItems: "center",
        padding: 20,
        borderRadius:20,
    },
    profilePicture: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        color: "white",
        height: 20,
        width: 20,
        borderRadius: "50%",
        padding: 10,
        fontWeight:"bold",
    },
    bio: {
        marginLeft:10,
    },
    userName: {
        fontWeight:"bold",
    },

   
}
const UserCardComponent = () => {
    <div style={cardStyles.Container}>
        <span style={cardStyles.profilePicture}>D</span>
        <div style={cardStyles.bio}>
            <p style={cardStyles.userName}>Desmond Nyamador</p>
            <p>I just learned an easy way to style React Components</p>
        </div>
     </div>  
}

export default UserCardComponent;