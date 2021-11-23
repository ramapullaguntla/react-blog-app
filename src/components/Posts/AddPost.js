import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


const AddPost = (props) =>
{
    const {register, handleSubmit, errors} = useForm();

    const history = useHistory();

    const onSubmit = (data) =>
    {
        console.log("Form submitted..  ", JSON.stringify(data));

        //call addpost handler
        props.addpostHandler({ "title" : data.title, "text" : data.content});
        history.push("/");
    };

    return(
        <div className="formcontainer">
        <form onSubmit={handleSubmit(onSubmit)} className="addform">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"              
              ref={register({ required: "Title is required" })}
            />
            <p>{errors.title?.message}</p>
            <label>Content</label>
            <input
              type="text"
              name="content"
              placeholder="Content"              
              ref={register({ required: "Content is required" })}
            />
            <p>{errors.content?.message}</p>
            <button className="uibutton">Add Post</button>
        </form>
        </div>
    );
};

export default AddPost;