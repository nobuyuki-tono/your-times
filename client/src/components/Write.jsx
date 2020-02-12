import React, { useState } from "react";
import Navbar from "./Navbar";

import "../style/Write.scss";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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

const Write = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (title === "" || author === "" || imgUrl === "" || content === "") {
      alert("Plese fill in all form");
    } else {
      const post = await api.post("/posts", {
        title,
        author,
        imgUrl,
        content
      });
    }

    setTitle("");
    setAuthor("");
    setImgUrl("");
    setContent("");
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
    <div className="write">
      <Navbar />
      <h1 className="write-heading">Write your Stroy</h1>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className="input-title"
          name="title"
          value={title}
          style={{ fontSize: "40px" }}
          id="standard-basic"
          label="Title"
          InputProps={{
            classes: {
              input: classes.title
            }
          }}
          onChange={handleTitleChange}
        />
        <br></br>
        <TextField
          className="input-author"
          name="author"
          value={author}
          style={{ fontSize: "40px" }}
          id="standard-basic"
          label="Author Name"
          InputProps={{
            classes: {
              input: classes.author
            }
          }}
          onChange={handleAuthorChange}
        />{" "}
        <br />
        <TextField
          className="input-author"
          name="imgUrl"
          value={imgUrl}
          style={{ fontSize: "40px" }}
          id="standard-basic"
          label="Imgae URL"
          InputProps={{
            classes: {
              input: classes.author
            }
          }}
          onChange={handleImgUrlChange}
        />{" "}
        <br />
        <TextField
          id="outlined-textarea"
          label="Story"
          name="content"
          value={content}
          placeholder="Your Story"
          multiline
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.content
            }
          }}
          onChange={handleContentChange}
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
      </form>
    </div>
  );
};

export default Write;
