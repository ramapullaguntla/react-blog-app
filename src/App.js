import BlogHeader from "./components/Headers/header";
import PostsList from "./components/Posts/PostsList";
import AddPost from "./components/Posts/AddPost";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from "react";
import BlogFooter from "./components/Headers/footer";



function App() {
  

  const [blogposts, setposts] = useState([]);

  const POST_KEY = "BLOGPOSTS";
  
  useEffect(() =>
  {
      console.log("useEffect rendered..");
      
      if(!localStorage.getItem(POST_KEY))
      {
        localStorage.setItem(POST_KEY, JSON.stringify([]));         
      }
      else
      {
         const localPosts = JSON.parse(localStorage.getItem(POST_KEY));
         setposts(localPosts);
      }
  },
    []
  );

  const addPost = (p) =>
  {
      const newPosts = [...blogposts, p];

      console.log("new posts ", newPosts);

      localStorage.setItem(POST_KEY, JSON.stringify(newPosts));
      setposts(newPosts);
      
  };

  return (
    <div>        
       <Router>
        <BlogHeader/>      
        <Switch>
        <Route path="/" exact render={(props) => <PostsList {...props} postdata = {blogposts}/>}/>
        <Route path="/addpost" exact render={(props) => <AddPost addpostHandler={addPost}/>} />
        </Switch> 
        <BlogFooter count = {blogposts.length}/>
       </Router>      
    </div>
  );
}

export default App;
