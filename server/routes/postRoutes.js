const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create Post
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;

  const post = new Post({
    title,
    content,
    author: req.user
  });

  await post.save();
  res.json(post);
});

// Get All Posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.json(posts);
});

// Get My Posts
router.get("/my", auth, async (req, res) => {
  const posts = await Post.find({ author: req.user });
  res.json(posts);
});

// UPDATE POST
router.put("/:id", auth, async (req, res) => {
  const { title, content } = req.body;

  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );

  res.json(updatedPost);
});

// Delete Post
router.delete("/:id", auth, async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;