const router = require("express").Router();
const { User } = require("../Models/Schema");
const conn = require("../Utils/DB");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const q = "SELECT * FROM user";
    const users = await new Promise((resolve) => {
      conn.query(q, (err, data) => {
        if (err) return res.json(err);
        resolve(data);
      });
    });
    const newUsr = users.map((item) => {
      const { password, ...others } = item;
      return others;
    });
    return res.json(newUsr);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // const q = "SELECT * FROM user where `id` = (?)";

    // const users = await new Promise((resolve) => {
    //   conn.query(q, [id], (err, data) => {
    //     if (err) return res.json(err);
    //     resolve(data);
    //   });
    // });
    // const newUsr = users.map((item) => {
    //   const { password, ...others } = item;
    //   return others;
    // });
    // return res.json(newUsr);

    const newUser = await User.findOne({ _id: id });
    if (newUser) {
      res.status(200).json(newUser);
    } else {
      res.status(404).json({ message: "No user found!" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  try {
    const id = req.params.id;

    // ========================================

    // const UpdatedUser = await new Promise((resolve) => {
    //   const q =
    //     "UPDATE user SET `username` = ?, `password` = ?, `email` = ?, `profile_pic` = ? WHERE  id = ?";
    //   const values = [
    //     req?.body?.username,
    //     req?.body?.password,
    //     req?.body?.email,
    //     req?.body?.profile_pic,
    //     id,
    //   ];
    //   conn.query(q, values, (err, data) => {
    //     if (err) console.log(err);
    //     resolve(data);
    //   });
    // });

    // ========================================

    const { username, password, profile_pic, profile_text, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          username,
          password,
          profile_pic,
          profile_text,
          email,
        },
      },
      { new: true }
    );
    
    if(updatedUser){
      res.status(200).json(updatedUser);
    }else{
      res.status(404).json({message:"No User Found!"})
    }

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
