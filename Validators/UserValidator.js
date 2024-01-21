const { body, validationResult } = require("express-validator");
const { User } = require("../Models/Schema");

const userValidationRules = () => {
  return [
    body("username")
      .notEmpty()
      .withMessage("Name is required")
      .custom(async (value) => {
        const username = await User.findOne({ username: value });
        if (username) {
          throw new Error("Username is already exists");
        }
        return true;
      }),
    body("email")
      .isEmail()
      .withMessage("Invalid Email")
      .custom(async (value) => {
        const email = await User.findOne({ email: value });
        if (email) {
          throw new Error("Email is already exists");
        }
        return true;
      }),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
};

module.exports = userValidationRules;
