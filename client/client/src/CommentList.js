/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import axios from 'axios';



export default ({ comments }) => {
    const renderedComments = comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>
    })
    return <ul>{renderedComments}</ul>
}