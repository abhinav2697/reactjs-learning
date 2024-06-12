import { useState } from "react";
const user_1 = {
    id: 1,
    name: "John",
    Permissions: ["admin", "dashboard"],
    roles:["admin"],
}

const user_2 = {
    id: 2,
    name: "John",
    Permissions: ["admin"],
    roles:["admin"],
}
const user_3 = {
    id: 3,
    name: "John",
    Permissions: ["dashboard"],
    roles:[],
}

const LoginButton = ({ user, setUser }) => {
    const [userLogged, setUserLogged] = useState(null);
    const login = () => {
        setUser(userLogged)
    }
    const logout = () => {
        setUser(null)
        setUserLogged(null)
    }
    return (
        <div>
            {!user ? <button onClick={() => login()}>Login</button> : <button onClick={() => logout()}> Logout</button>}
                {!user && (
                    <div>
                        <button 
                            className={userLogged?.id === 1 && "active"}
                            onClick={() => {
                            setUserLogged(user_1)
                            }}
                        >
                            User 1
                        </button>
                        <button className={userLogged?.id === 2 && "active"} onClick={() => setUserLogged(user_2)}>
                            User 2
                        </button>
                        <button className={userLogged?.id === 3 && "active"} onClick={() => setUserLogged(user_3)}>
                            User 3
                        </button>
                    </div>
                )
            }
        </div>
    )
}
export default LoginButton;