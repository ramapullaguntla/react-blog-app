import React from 'react';

const Post = (props) =>
{
   return (
   <div className="eachpost">
        <h2>{props.eachpost.title}</h2>
        <p>{props.eachpost.text}</p>
    </div>);

};

export default Post;