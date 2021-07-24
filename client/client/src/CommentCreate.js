/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import axios from 'axios';


export default ({ postId }) => {
    const [content, setContent] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4000/posts/${postId}/comments`, { content })
        setContent('');
    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input value={content} className="form-control" onChange={e => setContent(e.target.value)} />
            </div>
            <button className="btn btn-primary">Comment</button>
        </form>
    </div>
}
