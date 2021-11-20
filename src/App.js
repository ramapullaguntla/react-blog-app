import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import BlogHeader from "./components/Headers/header";
import PostsList from "./components/Posts/PostsList";
import AddPost from "./components/Posts/AddPost";



function App() {

  const posts = [
    {
      title: "First Blog Post",
      text : "this is about react"
    },
    {
      title: "Second Blog post",
      text : "this is about NodeJS"
    },
    {
      title: "Third Blog Post",
      text : "this is about react"
    }
  ];
  return (
    <div> 
       <BlogHeader/>
       <div className="blogcontainer">
          <PostsList postdata = {posts}/>  
       </div>
       <Router>
        <Routes>          
            <Route path="/addpost" component={AddPost}></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
