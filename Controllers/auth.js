// import  { User }  from "../Models/Schema";
// import  jwt  from "jsonwebtoken";

// export const googleAuth = async (req, res, next) => {
//   try {
//     const user = await User.find({ email: req.body.email });

//     if (user) {
//       const token = jwt.sign(
//         {
//           id: user.id,
//         },
//         process.env.JWT_KEY,
//         { expiresIn: "3d" }
//       );

//       res
//         .cookie("access_token", token, {
//           httpOnly: true,
//         })
//         .status(200)
//         .json(user._doc);
//     } else {
//       const newUser = newUser({
//         ...req.body,
//         formGoogle: true,
//       });
//       const savedUser = await newUser.save();
//       const token = jwt.sign({ id: savedUser._id }, process.env.JWT_KEY);
//       res
//         .cookie("access_token", token, {
//           httpOnly: true,
//         })
//         .status(200)
//         .json(savedUser._doc);
//     }
//   } catch (err) {
//     next(err);
//   }
// };
