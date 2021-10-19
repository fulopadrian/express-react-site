//jshint esversion: 6
//TODO: in the savePost handle 404 error by checking res.ok and throwing error

export function getAllPosts() {
  return fetch("/posts")
  .then((res) => res.json());
}

export function getPost(postId) {
  return fetch("/posts/" + postId)
  .then((res) => res.json());
}

export function savePost(post) {
  return fetch("/savepost", {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(post),
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}
