const router = require("express").Router();
const conn = require("../Utils/DB");
const { Post } = require("../Models/Schema");
const { verifyTokenAndAuth, verifyToken } = require("./VerifyToken");

router.post("/", verifyToken , async (req, res) => {
  try {
    if (req.body) {
      // const q =
      //   "INSERT INTO posts (`AuthorId`,`username`, `Content`, `Title`, `Image`, `UpdatedAt`, `PublishedAt`, `Category`) VALUES (?)";
      // const values = [
      //   req.body.AuthorId,
      //   req.body.username,
      //   req.body.Content,
      //   req.body.Title,
      //   req.body.Image,
      //   req.body.UpdatedAt,
      //   req.body.PublishedAt,
      //   req.body.Category,
      // ];

      // conn.query(q, [values], (err, data) => {
      //   if (err) return res.json(err);

      //   return res.json(data);
      // });

      const {
        author,
        username,
        content,
        title,
        image,
        updatedAt,
        publishedAt,
        category,
      } = req.body;

      const newPost = new Post({
        author,
        username,
        content,
        title,
        image,
        updatedAt,
        publishedAt,
        category,
      });

      const savedPost = await newPost.save();
      res
        .status(200)
        .json({ status: "Post Added Successfully!", ...savedPost._doc });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qUsername = req.query.username;
  const qCategory = req.query.category;

  try {
    let posts;
    if (qNew) {
      posts = await new Promise((resolve) => {
        const postsQuery =
          "SELECT * FROM `posts` order by `CreatedAt` ASC LIMIT 10;";
        conn.query(postsQuery, (err, data) => {
          if (err) return res.json(err);

          resolve(data);
        });
      });
    } else if (qUsername) {
      posts = await new Promise((resolve) => {
        const userPostQuery =
          "SELECT * FROM `posts` where `username` = (?) order by `CreatedAt` DESC";

        conn.query(userPostQuery, [qUsername], (err, data) => {
          if (err) return res.json(err);

          resolve(data);
        });
      });
    } else if (qCategory) {
      posts = await new Promise((resolve) => {
        const q = "SELECT * FROM `posts` WHERE FIND_IN_SET((?),category);";
        conn.query(q, [qCategory], (err, data) => {
          if (err) return res.json(err);

          resolve(data);
        });
      });
    } else {
      posts = await new Promise((resolve) => {
        const q = "SELECT * FROM posts ORDER BY `CreatedAt` DESC LIMIT 20";
        conn.query(q, (err, data) => {
          if (err) return res.json(err);
          resolve(data);
        });
      });
    }
    return res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await new Promise((resolve) => {
      const q =
        "select * from `posts` where `id` = (?) order by `CreatedAt` ASC";
      conn.query(q, [id], (err, data) => {
        if (err) return res.json(err);
        resolve(data);
      });
    });

    const comments = await new Promise((resolve) => {
      const q =
        "select text, user.username, post_comment.CreatedAt,profile_pic from post_comment, posts, user where posts.id = (?) and post_comment.postId = posts.id and user.id = post_comment.AuthorId order by `CreatedAt` DESC";

      conn.query(q, [id], (err, data) => {
        if (err) return res.json(err);

        resolve(data);
      });
    });
    return res.json({ ...post, comments });
  } catch (err) {}
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const delete_comments = await new Promise((resolve) => {
      const q = "DELETE FROM post_comment where postId = ?";

      conn.query(q, [id], (err, data) => {
        if (err) return res.json(err);

        resolve(data);
      });
    });

    if (delete_comments) {
      const deleted_Post = await new Promise((resolve) => {
        const q = "DELETE FROM posts where id = ?";

        conn.query(q, [id], (err, data) => {
          if (err) return res.json(err);

          resolve(data);
        });
      });
      return res.json({ message: "Deleted Success" });
    }
  } catch (err) {}
});

module.exports = router;
