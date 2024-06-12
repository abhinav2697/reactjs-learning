import {useState} from "react";
import { useNavigate } from "react-router-dom";
const AppLayout = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const logOut = () => {
        setUser(null);
        navigate("/");
    }
}
export default AppLayout;