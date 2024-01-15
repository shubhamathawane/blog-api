const express = require("express");
const app = express();
const dotenv = require("dotenv");
const conn = require("./Utils/DB.js");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({limit: '5mb'}));
app.use(cors());
dotenv.config();
app.use("/images", express.static(path.join(__dirname, "/images")));

const port = process.env.PORT || 3001;

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

// importing routes

const authRoute = require("./Routes/Auth.js");
const postsRoute = require("./Routes/Posts.js");
const userRoute = require("./Routes/user.js");
const commentRoute = require("./Routes/Comment.js");

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json("File has been uploaded");
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/users", (req, res) => {
  const q = "SELECT * FROM user";
  try {
    conn.query(q, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json;
  }
});

app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/user", userRoute);
app.use("/api/comment", commentRoute);

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
