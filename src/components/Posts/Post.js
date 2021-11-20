import React from 'react';

const Post = (props) =>
{
   return (<div className="eachpost">
        <h1>{props.eachpost.title}</h1>
        <p>{props.eachpost.text}</p>
    </div>);

};

export default Post;