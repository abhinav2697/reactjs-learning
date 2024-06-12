import { Outlet, Link } from "react-router-dom";
const Layout = ({ user, logOut }) => {
    
    return (
        <>
            <nav style={{margin:"10px"}}>
                <Link to="/" style={{padding:5}}>Home</Link>
                <Link to="/blogs" style={{ padding: 5 }}>Blogs</Link>
                <Link to="/posts" style={{padding:5}}>Posts</Link>
                <Link to="/contact" style={{padding:5}}>Contact</Link>
                <Link to="/about">About</Link>
                <span>|</span>
                {user && <Link to="/stats" style={{ padding: 5 }}>
                Stats
                </Link>}
                {!user && <Link to="/login" style={{ padding: 5 }}>
                Login
                </Link>}
                {user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>
                    Logout
                </span>}
                

            </nav>
            <Outlet />
            </>
    )
}
export default Layout;