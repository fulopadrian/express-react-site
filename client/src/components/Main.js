//jshint esversion: 6

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import PostDisplay from "./PostDisplay";
import PostEditor from "./PostEditor";
import About from "./About";
import Contact from "./Contact";

function Main() {
  return (
    <section className="main">
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/posts" component={Home}></Route>
      <Route exact path="/posts/:postId" component={PostDisplay}></Route>
      <Route exact path="/compose" component={PostEditor}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
    </section>
  );
}

export default Main;
