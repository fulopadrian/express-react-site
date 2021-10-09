//jshint esversion: 6

import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post.js";

function SinglePost() {
  let { postId } = useParams();
  const [post, setPost] = React.useState();

  React.useEffect(function() {
    fetch("/posts/" + postId)
    .then((res) => res.json())
    .then((data) => setPost(data));
  });

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
      <hr className="my-4" />
      {!post ? "Loading..." : createPost(post)}
    </div>
  );
}

export default SinglePost;
