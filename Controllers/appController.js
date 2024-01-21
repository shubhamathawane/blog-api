import { User } from "../Models/Schema";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { username, password, email, profile_pic, profile_text } = req.body;

    // check for existing user

    const existUsername = new Promise((res, rej) => {
      User.findOne({ username }, (err, user) => {
        if (err) rej(new Error(err));
        if (user) reject({ error: "Please use unique username" });

        res();
      });
    });

    // check for existing Email
    const existEmail = new Promise((res, rej) => {
      User.findOne({ email }, (err, email) => {
        if (err) rej(new Error(err));
        if (email) rej({ error: "Email already exist!" });

        res();
      });
    });

    Promise.all([existEmail, existUsername])
      .then(() => {
        if (password) {
          bcrypt.hash(password, 10).then((hashedPassword) => {
            const user = new User({
              username,
              email,
              password: hashedPassword,
              profile_pic,
              profile_text,
            });

            // return save result as response

            user
              .save()
              .then((res) =>
                res.status(201).json({ message: "User Registered!" })
              )
              .catch((err) => res.status(500).json({ err }));
          });
        }
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  } catch (err) {
    return res.status(500).json(err);
  }
};