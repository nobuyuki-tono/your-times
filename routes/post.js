const express = require("express");
const router = express.Router();

const { getAllPosts } = require("../controller/post");
const { createPost } = require("../controller/post");
const { editPost } = require("../controller/post");
const { deletePost } = require("../controller/post");

// Route for get all blog posts

router.get("/posts", getAllPosts);

// Route for add post
router.post("/posts", createPost);

// Route for update post
router.post("/post/edit/:postId", editPost);

// Route for delete a post
router.delete("/post/delete/:id", deletePost);

module.exports = router;
