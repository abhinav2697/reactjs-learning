import React, { useContext } from "react";
import AuthContext from "./auth-context";
const Auth = () => {
    const auth = useContext(AuthContext);
    console.log(auth.status);
    return (
        <div>
            <h1>Are you Authenticated?</h1>
            {auth.status ? <p>Yes you are</p> : <p>Nope</p>}
            <button onClick={auth.login}>Login</button>
        </div>
    )
}

export default Auth;