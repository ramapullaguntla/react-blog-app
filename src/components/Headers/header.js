import React from 'react';
import { Link } from 'react-router-dom';

const BlogHeader = () =>
{
    return(
        <div className="header">
            <h2>React JS Blog</h2>
             <ul className="links">
                 <li><Link  to={"/"}>Home</Link></li>
                 <li><Link to={"/addpost"}>Post</Link></li>
                 <li><Link to={"/"}>About</Link></li>              
             </ul>
        </div>
    );
};

export default BlogHeader;