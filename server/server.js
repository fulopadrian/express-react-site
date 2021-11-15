//jshint esversion: 6

/*TEST DATA SIMULATING DATABASE*/
const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing enim eu turpis egestas pretium aenean pharetra. Amet nulla facilisi morbi tempus iaculis. Ullamcorper dignissim cras tincidunt lobortis. Scelerisque in dictum non consectetur a erat nam at lectus. Viverra nam libero justo laoreet sit. Vivamus at augue eget arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla."
  },
  {
    id: 2,
    title: "Post 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing enim eu turpis egestas pretium aenean pharetra. Amet nulla facilisi morbi tempus iaculis. Ullamcorper dignissim cras tincidunt lobortis. Scelerisque in dictum non consectetur a erat nam at lectus. Viverra nam libero justo laoreet sit. Vivamus at augue eget arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla."
  },
  {
    id: 3,
    title: "Post 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing enim eu turpis egestas pretium aenean pharetra. Amet nulla facilisi morbi tempus iaculis. Ullamcorper dignissim cras tincidunt lobortis. Scelerisque in dictum non consectetur a erat nam at lectus. Viverra nam libero justo laoreet sit. Vivamus at augue eget arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla."
  },
  {
    id: 4,
    title: "Post 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing enim eu turpis egestas pretium aenean pharetra. Amet nulla facilisi morbi tempus iaculis. Ullamcorper dignissim cras tincidunt lobortis. Scelerisque in dictum non consectetur a erat nam at lectus. Viverra nam libero justo laoreet sit. Vivamus at augue eget arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla."
  },
  {
    id: 5,
    title: "Post 5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing enim eu turpis egestas pretium aenean pharetra. Amet nulla facilisi morbi tempus iaculis. Ullamcorper dignissim cras tincidunt lobortis. Scelerisque in dictum non consectetur a erat nam at lectus. Viverra nam libero justo laoreet sit. Vivamus at augue eget arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla."
  },
  {
    id: 6,
    title: "Post 6",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing enim eu turpis egestas pretium aenean pharetra. Amet nulla facilisi morbi tempus iaculis. Ullamcorper dignissim cras tincidunt lobortis. Scelerisque in dictum non consectetur a erat nam at lectus. Viverra nam libero justo laoreet sit. Vivamus at augue eget arcu. Nunc scelerisque viverra mauris in aliquam sem fringilla."
  }
];

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3001;

/*TEST ENDPOINTS*/
app.get("/home", function(req, res){
  res.json({ message: "Hello from Server!" });
});

app.post("/home", function(req, res){
  console.log(req.body);
  res.json({ message: "RECEIVED" });
});

/*LIVE ENDPOINTS*/
app.get("/posts", function(req, res){
  res.json(posts);
});

app.get("/posts/:postId", function(req, res) {
  let postId = req.params.postId;

  let post = posts.find(post => post.id === parseInt(postId, 10));

  res.json(post);
});

app.post("/savepost", function(req, res) {
  let lastPost = posts[posts.length - 1];

  let newPost = {
    id: lastPost.id + 1,
    title: req.body.title,
    content: req.body.content
  };

  posts.push(newPost);

  res.json({ message: "POST SAVED" });
});

app.post("/updatepost", function(req, res) {
  let postId = req.body.id;
  let postTitle = req.body.title;
  let postContent = req.body.content;

  let post = posts.find(post => post.id === parseInt(postId, 10));
  if (post) {
    post.title = postTitle;
    post.content = postContent;
  } else {
    res.json({ message: "ERROR: POST DOES NOT EXISTS"});
  }

  res.json({ message: "POST UPDATED" });
});

/*SERVER STARTING*/
app.listen(PORT, function() {
  console.log("Server started on port " + PORT);
});
