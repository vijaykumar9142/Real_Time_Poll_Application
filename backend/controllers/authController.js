import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
return jwt.sign(
{ id },
process.env.JWT_SECRET,
{
expiresIn: "30d",
}
);
};

// ======================
// REGISTER USER
// ======================
export const registerUser = async (
req,
res
) => {
try {
const {
name,
email,
password,
} = req.body;

  
const userExists =
  await User.findOne({
    email,
  });

if (userExists) {
  return res.status(400).json({
    message:
      "User already exists",
  });
}

const hashedPassword =
  await bcrypt.hash(
    password,
    10
  );

const user =
  await User.create({
    name,
    email,
    password:
      hashedPassword,
  });

res.status(201).json({
  _id: user._id,
  name: user.name,
  email: user.email,
  phone: user.phone,
  dob: user.dob,
  qualification:
    user.qualification,
  address: user.address,
  token: generateToken(
    user._id
  ),
});
  

} catch (error) {
res.status(500).json({
message: error.message,
});
}
};

// ======================
// LOGIN USER
// ======================
export const loginUser = async (
req,
res
) => {
try {
const { email, password } =
req.body;

  
const user =
  await User.findOne({
    email,
  });

if (
  user &&
  (await bcrypt.compare(
    password,
    user.password
  ))
) {
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    dob: user.dob,
    qualification:
      user.qualification,
    address: user.address,
    token: generateToken(
      user._id
    ),
  });
} else {
  res.status(401).json({
    message:
      "Invalid Credentials",
  });
}
  

} catch (error) {
res.status(500).json({
message: error.message,
});
}
};

// ======================
// GET PROFILE
// ======================
export const getProfile = async (
req,
res
) => {
try {
const user =
await User.findById(
req.user._id
).select("-password");

  
if (!user) {
  return res.status(404).json({
    message:
      "User not found",
  });
}

res.json(user);
  

} catch (error) {
res.status(500).json({
message: error.message,
});
}
};

// ======================
// UPDATE PROFILE
// ======================
export const updateProfile =
async (req, res) => {
try {
const user =
await User.findById(
req.user._id
);

  
  if (!user) {
    return res
      .status(404)
      .json({
        message:
          "User not found",
      });
  }

  user.name =
    req.body.name ||
    user.name;

  user.phone =
    req.body.phone ||
    user.phone;

  user.dob =
    req.body.dob ||
    user.dob;

  user.qualification =
    req.body
      .qualification ||
    user.qualification;

  user.address =
    req.body.address ||
    user.address;

  await user.save();

  res.json({
    message:
      "Profile Updated Successfully",
    user,
  });
} catch (error) {
  res.status(500).json({
    message:
      error.message,
  });
}
  

};

// ======================
// FORGOT PASSWORD
// ======================
export const forgotPassword =
async (req, res) => {
try {
const {
email,
newPassword,
} = req.body;

  
  const user =
    await User.findOne({
      email,
    });

  if (!user) {
    return res
      .status(404)
      .json({
        message:
          "User not found",
      });
  }

  user.password =
    await bcrypt.hash(
      newPassword,
      10
    );

  await user.save();

  res.status(200).json({
    message:
      "Password Updated Successfully",
  });
} catch (error) {
  res.status(500).json({
    message:
      error.message,
  });
}
  

};
