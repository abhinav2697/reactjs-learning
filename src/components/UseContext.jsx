import React, { useState } from "react";
import Auth from "./Auth";
import AuthContext from "./auth-context";
const UseContext = () => {
    const [authStatus, setauthStatus] = useState(false);
    const login = () => {
        setauthStatus(true);
    };
    return (
        <React.Fragment>
            <AuthContext.Provider value={{ status: authStatus, login: login }}>
                <Auth/>
            </AuthContext.Provider>
            </React.Fragment>
    )
}
export default UseContext;