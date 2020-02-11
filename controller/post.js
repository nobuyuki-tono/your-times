const Post = require("../models/post");

exports.getAllPosts = async (req, res) => {
  try {
    const articles = await Post.find();
    return res.status(200).send({ articles });
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.createPost = async (req, res) => {
  const post = new Post(req.body);
  try {
    if (!post) {
      return res.send("Something wrong with postiong");
    }
    await post.save();
    return res.status(201).send({ post });
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.editPost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      { _id: req.params.postId },
      {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        imgUrl: req.body.imgUrl
      }
    );

    return res.status(201).send({ post });
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete({ _id: req.params.id });
    return res.status(201).send({ post });
  } catch (err) {
    return res.status(400).send(err);
  }
};
