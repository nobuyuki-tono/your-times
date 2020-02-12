import React from "react";

import Navbar from "./Navbar";
import Posts from "./Posts";

import { Link } from "react-router-dom";

import "../style/Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <h1 className="home-heading">You Times</h1>
        <h4 className="home-subHeading">Write what you want to</h4>
        <h4 className="home-subHeading">Let the world know your stroy!!</h4>
        <Link to="/write" className="home-btn">
          Write your story
        </Link>
      </div>
      <Posts />
    </>
  );
};

export default Home;
