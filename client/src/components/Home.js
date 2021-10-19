//jshint esversion: 6

import React from "react";
import { getAllPosts } from "../services/PostServices";
import Post from "./Post";

function Home() {
  const [posts, setPosts] = React.useState();

  React.useEffect(function() {
    let mounted = true;
    getAllPosts()
    .then(data => {
    if(mounted) {
      setPosts(data);
    }
    });
    return () => mounted = false;
  }, []);

  function createPost(post) {
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
      {!posts ? "Loading..." : posts.map(createPost)}
    </div>
  );
}

export default Home;
