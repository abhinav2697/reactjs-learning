import React, { useState, useEffect } from "react";
import axios from 'axios';
const AxiosCrud = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body };
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        .then(response => {
            alert(`New Post Created with ID:${response.data.id}`);
        })
            .catch(error => {
            console.log('Error creating new post:',error)
        })

    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
        })
    }, []);

    // UpdatePost 
        const postId = 1;
        const updatedData = { title: "New Title", body: "Updated body text" };
        const handleUpdate = () => {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedData)
                .then((response) => {
                    console.log("Updated Post:", response.data);
                })
                .catch((error) => {
                    console.log("Error Updating the post:", error);
            })
        }
    
   
    const handleDelete = (postId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(() => {
                setPosts(posts.filter(post => post.id !== postId));
                console.log(`Post with ID${postId} deleted successfully`);
            })
            .catch(error => {
                console.log('Error deleting the post:', error);
            });
    }

    return (
        <div>
             <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => handleDelete(post.id)}>Delete Post</button>
                </div>
            ))} 
             <div>
                 <form onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" /><br/><br/>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea><br/>
                    <button type="submit" >Create Post</button>
                    
                </form>
            </div>
            <div><button onClick={handleUpdate}>Update Post</button>
                
            </div>
        </div>   
    )

    
}
export default AxiosCrud;