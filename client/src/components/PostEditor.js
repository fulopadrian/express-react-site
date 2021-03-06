//jshint esversion: 6
//TODO: do not allow empty title or content to be saved!

import React from "react";
import { useParams } from "react-router-dom";
import { savePost, updatePost, getPost } from "../services/PostServices";

function PostEditor() {
  let { postId } = useParams();

  const [postTitle, setPostTitle] = React.useState("");
  const [postContent, setPostContent] = React.useState("");

  React.useEffect(function() {
    let mounted = true;

    if (postId !== undefined) {
      getPost(postId)
      .then(data => {
        if(mounted) {
          setPostTitle(data.title);
          setPostContent(data.content);
        }
      });
    } else {
      setPostTitle("");
      setPostContent("");
    }
    return () => mounted = false;
  }, [postId]);

  function handlePostTitleChange(event) {
    setPostTitle(event.target.value);
  }

  function handlePostContentChange(event) {
    setPostContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let post = {
      id: !postId ? null : postId,
      title: postTitle,
      content: postContent
    };

    if (postId !== undefined) {
      updatePost(post)
      .then((res) => {
        console.log(res.message);
      });
    } else {
      savePost(post)
      .then((res) => {
        console.log(res.message);
        setPostTitle("");
        setPostContent("");
      });
    }
  }

  return (
    <div>
      <h1 class="siteHeading">Compose post</h1>
      <hr className="my-4" />
      <div className="p-5 rounded m-3 post">
        <form onSubmit={handleSubmit}>
          <label for="postTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="postTitle" placeholder="Post title" onChange={handlePostTitleChange} value={postTitle}></input>
          <label for="postContent" className="form-label">Post content</label>
          <textarea className="form-control" id="postContent" rows="12" onChange={handlePostContentChange} value={postContent}></textarea>
          <input className="btn btn-primary m-3" type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default PostEditor;
