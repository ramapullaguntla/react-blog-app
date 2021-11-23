import React from 'react';
import Post from './Post';

const PostsList = (props) =>
{
    const renderPosts =() =>
    {
        console.log("postdata props ", props.postdata);
        console.log("postdata props length", props.postdata.length);
        if(props.postdata.length === 0)
        {
            return(
                <div>The blog posts are empty. Please use the Post button to add posts.</div>
            );
        }
        else
        {
            return(            
                props.postdata.map((eachPost, index) =>
                {
                    return <Post eachpost={eachPost} key={index}/>;                
                })
            );
        }
    };

    return(
        <div className="blogcontainer">        
        <div>
            {renderPosts()}            
        </div>
        </div>
    );
};

export default PostsList;