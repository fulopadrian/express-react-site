//jshint esversion: 6

import React from "react";
import Post from "./Post.js";

function Home() {
  const [posts, setPosts] = React.useState();

  React.useEffect(function() {
    fetch("/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
  }, []);

  function createPosts(post){
    return (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
        truncated={true}
      />
    );
  }

  return (
    <div>
      <hr className="my-4" />
      {!posts ? "Loading..." : posts.map(createPosts)}
    </div>
  );
}

export default Home;
