const router = require("express").Router();
const conn = require("../Utils//DB.js");

router.post("/", async (req, res) => {
  try {
    if (req.body) {
      const q = "insert into post_comment (postId, Text, AuthorId) values (?)";
      const values = [req.body.postId, req.body.Text, req.body.AuthorId];

      conn.query(q, [values], (err, data) => {
        if (err) return res.json(err);

        return res.json(data);
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
