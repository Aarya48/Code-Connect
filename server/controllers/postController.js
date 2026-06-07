const Post = require("../models/Post");

const createPost = async (
  req,
  res
) => {
  try {
    const post =
      await Post.create({
        content: req.body.content,
        author: req.user.id,
      });

    res.status(201).json(post);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPosts = async (
  req,
  res
) => {
  try {
    const posts =
      await Post.find()
        .populate(
          "author",
          "name profileImage"
        )
        .sort({
          createdAt: -1,
        });

    res.status(200).json(posts);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createPost,
  getPosts,
};