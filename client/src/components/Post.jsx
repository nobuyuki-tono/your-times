import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import Navbar from "./Navbar";
import { api } from "../api";

import "../style/Post.scss";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(9),

      backgroundColor: "rgba(255 ,255,255,0.7)",
      borderRadius: 5
    }
  }
}));

const Post = ({ match, history }) => {
  const classes = useStyles();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getSinglePost() {
      const post = await api.get(`post/` + match.params.id);
      console.log(post.data["post"]);
      setPost(post.data["post"]);
    }

    getSinglePost();
  }, []);

  const handleDelete = async () => {
    console.log("hello");
    const postDeleted = await api.delete(`post/delete/${post._id}`);
    history.push("/");
  };

  return (
    <div className="post-page">
      <Navbar />
      <div className="post-container">
        <img className="post-img" src={post.imgUrl} alt="" />
        <div className="post-content">
          <h1 className="post-heading">{post.title}</h1>
          <p className="post-author">By {post.author}</p>
          <p className="post-content"> {post.content}</p>
        </div>
        <div className="post-btn-div">
          <a href={`edit/${post._id}`}>
            <Button
              m="16px"
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
              endIcon={<Icon>create</Icon>}
            >
              Edit
            </Button>
          </a>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
            endIcon={<Icon>delete</Icon>}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
