const router = require("express").Router();
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
    const q = "SELECT * FROM user where `id` = (?)";

    const users = await new Promise((resolve) => {
      conn.query(q, [id], (err, data) => {
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

router.put("/:id", async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  try {
    const id = req.params.id;
    const UpdatedUser = await new Promise((resolve) => {
      const q =
        "UPDATE user SET `username` = ?, `password` = ?, `email` = ?, `profile_pic` = ? WHERE  id = ?";
      const values = [
        req?.body?.username,
        req?.body?.password,
        req?.body?.email,
        req?.body?.profile_pic,
        id,
      ];
      conn.query(q, values, (err, data) => {
        if (err) console.log(err);
        resolve(data);
      });
    });

    return res.json(UpdatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
