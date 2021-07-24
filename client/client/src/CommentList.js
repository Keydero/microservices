/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default ({ postId }) => {
    const [comments, setComments] = useState([]);
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4000/posts/${postId}/comments`);
        setComments(response.data);
    };
    useEffect(() => {
        fetchData()
    }, []);
    const renderedComments = comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>
    })
    return <ul>{renderedComments}</ul>
}