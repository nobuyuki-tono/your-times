import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Write from "./components/Write";
import Post from "./components/Post";
import EditPost from "./components/EditPost";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/write" component={Write} />
          <Route exact path="/post-read/:id" component={Post} />
          <Route path="/post-read/edit/:id" component={EditPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
