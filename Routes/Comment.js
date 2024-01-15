const router = require("express").Router();
const conn = require("../Utils//DB.js");
const { PostComment } = require("../Models/Schema.js");

router.post("/", async (req, res) => {
  try {
    if (req.body) {
      // const q = "insert into post_comment (postId, Text, AuthorId) values (?)";
      // const values = [req.body.postId, req.body.Text, req.body.AuthorId];

      // conn.query(q, [values], (err, data) => {
      //   if (err) return res.json(err);

      //   return res.json(data);
      // });

      const { post, text, createdAt, author } = req.body;

      const newComment = new PostComment({
        post,
        text,
        createdAt,
        author,
      });

      const savedComment = await newComment.save();

      res.status(200).json({ ...savedComment._doc, status: "Comment Added!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
