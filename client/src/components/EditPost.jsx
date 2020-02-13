import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../style/Write.scss";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { api } from "../api";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),

      backgroundColor: "rgba(255 ,255,255,0.7)",
      borderRadius: 5
    }
  },
  title: {
    fontSize: 40,
    width: 500,
    padding: 10
  },
  author: {
    fontSize: 20,
    width: 500,
    padding: 10
  },
  content: {
    fontSize: 20,
    width: 500,
    padding: 10
  },
  btn: {
    width: 300,
    backgroundColor: "rgba(255 ,255,255,0.1)"
  }
}));

const EditPost = ({ post, history, match }) => {
  const classes = useStyles();
  //  const [postUpdata, setPostUpdate] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getSinglePost() {
      const post = await api.get(`post/` + match.params.id);
      console.log(post.data["post"]);
      setTitle(post.data["post"].title);
      setAuthor(post.data["post"].author);
      setImgUrl(post.data["post"].imgUrl);
      setContent(post.data["post"].content);
    }

    getSinglePost();
  }, []);

  const handleEditSubmit = async e => {
    e.preventDefault();
    if (title === "" || author === "" || imgUrl === "" || content === "") {
      alert("Plese fill in all form");
    } else {
      const editedPost = await api.post(`/post/edit/${match.params.id}`, {
        title,
        author,
        imgUrl,
        content
      });

      setTitle("");
      setAuthor("");
      setImgUrl("");
      setContent("");
      history.push(`/post/${match.params.id}`);
    }
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = e => {
    setAuthor(e.target.value);
  };
  const handleImgUrlChange = e => {
    setImgUrl(e.target.value);
  };
  const handleContentChange = e => {
    setContent(e.target.value);
  };

  return (
    <>
      <div className="write">
        <Navbar />
        <h1 className="write-heading">Edit your Stroy</h1>

        <ValidatorForm
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleEditSubmit}
        >
          <TextValidator
            required
            validators={["required"]}
            errorMessages={["title is required"]}
            className="input"
            name="title"
            value={title}
            style={{ fontSize: "40px" }}
            id="standard-basic"
            label="Title"
            onChange={handleTitleChange}
            inputProps={{
              style: { fontSize: 30 }
            }}
          />
          <br></br>
          <TextValidator
            required
            validators={["required"]}
            errorMessages={["Author name is required"]}
            className="input post-title"
            name="author"
            value={author}
            id="standard-basic"
            label="Author Name"
            inputProps={{
              style: { fontSize: 20 }
            }}
            onChange={handleAuthorChange}
          />{" "}
          <br />
          <TextValidator
            required
            validators={["required"]}
            errorMessages={["Image URL is required"]}
            className="input"
            name="imgUrl"
            value={imgUrl}
            id="standard-basic"
            label="Imgae URL"
            onChange={handleImgUrlChange}
            inputProps={{
              style: { fontSize: 20 }
            }}
          />{" "}
          <br />
          <TextValidator
            required
            validators={["required"]}
            errorMessages={["Content is required"]}
            id="outlined-multiline-static"
            className="input"
            label="Story"
            name="content"
            value={content}
            placeholder="Your Story"
            multiline
            variant="outlined"
            onChange={handleContentChange}
            rows="20"
            inputProps={{
              style: { fontSize: 20 }
            }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
        </ValidatorForm>
      </div>
      <Footer />
    </>
  );
};

export default EditPost;
