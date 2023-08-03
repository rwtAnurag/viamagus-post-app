import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./createposts.css";
import {  message } from 'antd';
import { addpostData } from "./Helper";
const CreatePosts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const info = () => {
        message.info('Post created successfully');
  };
  const history = useHistory();

  const handleSubmit = () => {
    if (
      title === "" ||
      title === " " ||
      title === "   " ||
      title === "    " ||
      title === "     " ||
      title === "      " ||
      title === "       " ||
      title === "        "
    ) {
      setError(true);
      return;
    } else {
      addpostData(title, description)
        .then((res) => {
        info()
          history.push({
            pathname: "/",
            state: {},
          });
        })
        .catch(() => {});
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setError(false);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  return (
    <>
      <div className="create-posts-main-container">
        <h1>Create New Post</h1>
        <div className="title-box-container">
          <span>Title</span>
          <input
            onChange={handleTitle}
            placeholder="Title"
            className="title-box"
          />
          {error ? (
            <span className="error-msg">The title field is required</span>
          ) : null}
        </div>
        <div className="description-box-container">
          <span>Description</span>
          <input
             type="text" maxlength="1000"
            onChange={handleDescription}
            placeholder="Desciption"
            className="description-box"
          />
        </div>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </>
  );
};

export default CreatePosts;
