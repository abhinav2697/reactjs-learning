import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import PostLists from "./Pages/PostsLists";
import Post from "./Pages/Post";
import Stats from "./Pages/Stats";
import Login from "./Pages/Login";

const RouteExample = ({user,setUser}) => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />

                    <Route path="/posts" element={<Posts />} >
                        <Route index element={<PostLists />} />
                        <Route path=":slug" element={<Post/>}/>
                    </Route>

                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="/login" element={<Login onLogin={setUser}/>}/>
                    <Route path="/stats" element={<Stats user={user} />} />
                    
                    <Route path="*" element={<NoPage/>}/>
                    
            </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteExample;