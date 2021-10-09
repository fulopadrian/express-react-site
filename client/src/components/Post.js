//jshint esversion: 6

import React from "react";
import { NavLink } from "react-router-dom";

function Post(props) {

  return (
    <div className="p-5 rounded m-3 post">
      <NavLink className="nav-link" to={"/posts/" + props.id}><h1 className="display-4">{props.title}</h1></NavLink>
      <p className="lead">{props.truncated ? props.content.substring(0, 200) + "[...]" : props.content}</p>
      <hr className="my-4" />
      <NavLink className="btn btn-primary" to={"/posts/" + props.id + "/edit"}>Edit</NavLink>
    </div>
  );
}

export default Post;
