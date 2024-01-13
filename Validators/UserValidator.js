const { body, validationResult } = require("express-validator");
const { User } = require("../Models/Schema");

const userValidationRules = () => {
  return [
    body("username").notEmpty().withMessage("Name is required"),
    body("email")
      .isEmail()
      .withMessage("Invalid Email")
      .custom(async (value) => {
        const user = await User.findOne({ email: value });

        if (user) {
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
