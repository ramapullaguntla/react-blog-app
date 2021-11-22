import React from 'react';
import { Link } from 'react-router-dom';

const BlogHeader = () =>
{
    return(
        <div className="header">
            <h2>React JS Blog</h2>
             <ul className="links">
                 <li>Home</li>   
                 <li>Post</li>
                 <li>ContactUs</li>         
             </ul>
        </div>
    );
};

export default BlogHeader;