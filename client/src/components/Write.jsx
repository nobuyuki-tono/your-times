import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../style/Write.scss";

import { makeStyles } from "@material-ui/core/styles";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
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
      // alert("Plese fill in all form");
    } else {
      const post = await api.post("/posts", {
        title,
        author,
        imgUrl,
        content
      });

      setTitle("");
      setAuthor("");
      setImgUrl("");
      setContent("");
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
        <h1 className="write-heading">Write your Stroy</h1>

        <ValidatorForm
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
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

export default Write;
