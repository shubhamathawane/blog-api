const router = require("express").Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const conn = require("../Utils/DB.js");
const { verifyToken } = require("./VerifyToken.js");
const { User } = require("../Models/Schema.js");
const userValidationRules = require("../Validators/UserValidator.js");
const { validationResult } = require("express-validator");
const { googleAuth } = require("../Controllers/auth.js");

router.post("/register", userValidationRules(), async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    if (req.body.username && req.body.email) {
      
      // ================================================
      // const q =
      //   "INSERT INTO user (`username`,`password`, `email`, `profile_text`) VALUES (?)";

      // const values = [
      //   req.body.username,
      //   hashedPass,
      //   req.body.email,
      //   req.body.profile_text,
      // ];

      // conn.query(q, [values], (err, data) => {
      //   if (err) return res.json(err);
      //   return res.json(data);
      // });

      // ================================================

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
        profile_text: req.body.profile_text,
        profile_pic: req.body.profile_pic,
      });

      const savedUser = await newUser.save();
      const { password, ...rest } = savedUser._doc;

      res.status(200).json({ status: "Registration Success", ...rest });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json({ message: "User does not exists!" });

    if (user) {
      try {
        const validate = await bcrypt.compare(req.body.password, user.password);

        !validate && res.status(400).json({ message: "Wrong password" });

        const accessToken = jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_KEY,
          { expiresIn: "3d" }
        );

        res.status(200).json({
          status: "Successfully Login",
          ...user._doc,
          accessToken,
        });
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    res.status(404).json({ message: "Cannot Login ! Wrong credentials!" });
  }
});

router.post("/google", async (req, res) => {

  console.log(req.body);

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_KEY,
        { expiresIn: "3d" }
      );

      res.status(200).json(user);
    } else {
      // const newUser = new User({
      //   username,
      //   email,
      //   fromGoogle: true,
      // });
      // const savedUser = await newUser.save();
      // const token = jwt.sign({ id: savedUser._id }, process.env.JWT_KEY);
      // res.status(200).json(savedUser);

      try {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          profile_pic: req.body.profile_pic,
          fromGoogle: true,
        });

        console.log("newUser :", newUser);

        const savedUser = await newUser.save();

        console.log("SavedUser :", savedUser);

        const { password, ...rest } = savedUser._doc;


        res.status(200).json({ status: "Registration Success", ...rest });
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
