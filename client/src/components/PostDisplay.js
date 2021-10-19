//jshint esversion: 6

import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post.js";
import { getPost } from "../services/PostServices";

function DisplayPost() {
  let { postId } = useParams();
  const [post, setPost] = React.useState();

  React.useEffect(function() {
    let mounted = true;
    getPost(postId)
    .then(data => {
    if(mounted) {
      setPost(data);
    }
    });
    return () => mounted = false;
  }, [postId]);

  function createPost(post){
    return (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
        truncated={false}
      />
    );
  }

  return (
    <div>
      {!post ? "Loading..." : createPost(post)}
    </div>
  );
}

export default DisplayPost;
