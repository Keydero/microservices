import React, { useState, useEffect } from 'react';
import axios from 'axios';



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [posts, setPosts] = useState({});
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4001/posts');
        setPosts(res.data);
    }
    useEffect(() => {
        fetchPosts();
    }, [])
    console.log(posts)
    return <div />;
}