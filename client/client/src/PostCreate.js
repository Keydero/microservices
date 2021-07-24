import React, { useState } from 'react';
import axios from 'axios';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4001/posts', { title });
        setTitle('')
    }
    const [title, setTitle] = useState('');
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group" >
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Poste</button>
        </form>
    </div>
}