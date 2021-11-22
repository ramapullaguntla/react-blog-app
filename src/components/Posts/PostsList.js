import React from 'react';
import Post from './Post';

const PostsList = (props) =>
{
 
    const renderPosts =() =>
    {
        return(
            props.postdata.map((eachPost, index) =>
            {
                return <Post eachpost={eachPost}/>
                
            })
        );
    };

    return(
        <div>
            {renderPosts()}
            
        </div>
    );
};

export default PostsList;