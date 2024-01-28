const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({limit: '5mb'}));
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3001;
// importing routes

const authRoute = require("./Routes/Auth.js");
const postsRoute = require("./Routes/Posts.js");
const userRoute = require("./Routes/User.js");
const commentRoute = require("./Routes/Comment.js");




app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/user", userRoute);
app.use("/api/comment", commentRoute);

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
