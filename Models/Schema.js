const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  timestamp: { type: Date, default: Date.now },
  profile_text: { type: String },
  profile_pic: { type: String },
});

const User = mongoose.model("User", UserSchema);

// Post Model

const PostSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  published: { type: Boolean, default: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: String },
  publishedAt: { type: String },
  content: { type: String, required: true },
  username: { type: String },
  category: { type: String },
  views: { type: Number, default: 0 }, 
});

const Post = mongoose.model("Post", PostSchema);

const PostCommentSchema = mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  createdAt: { type: Date, default: Date.now },
  text: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const PostComment = mongoose.model("PostComment", PostCommentSchema);

module.exports = {
  User,
  Post,
  PostComment,
};
