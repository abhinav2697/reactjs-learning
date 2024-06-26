import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";
const Nav = ({user,setUser}) => {
    return (
        <nav>
            <li>
                <Link to='/landing'>Landing</Link>
            </li>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/admin'>Login</Link>
            </li>
            <li>
                <Link to='/config'>Config</Link>
            </li>
            <li>
                <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
                <LoginButton user={user} setUser={setUser}/>
            </li>
        </nav>
    )
}
export default Nav;