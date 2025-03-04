const { User, Sequelize } = require("../models");
const nodemailer = require("nodemailer");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../middlewares/auth");
require("dotenv").config();

require("dotenv").config();

const getUsersExcludingAdmin = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        role: {
          [Sequelize.Op.ne]: "admin",
        },
      },
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateUserStatus = async (req, res) => {
  const { userId, status } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validStatuses = ["pending", "approved", "inactive"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    user.status = status;
    await user.save();

    await sendStatusUpdateEmail(user.email, status);

    return res.status(200).json({
      message: `User status updated to ${status} and email sent.`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const sendStatusUpdateEmail = async (userEmail, status) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Account Status Update",
    text: `Dear user,\n\nYour account status has been updated to: ${status}.\n\nThank you for being with us.`, // Email body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Status update email sent.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const getUserCount = async (req, res) => {
  try {
    const userCount = await User.count({
      where: {
        role: {
          [Sequelize.Op.ne]: "admin",
        },
      },
    });

    return res.status(200).json({ count: userCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

async function register(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      role,
      status,
      phoneNumber,
      address,
    } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || "user", // Default role if not provided
      status: status || "active", // Default status if not provided
      phoneNumber,
      address,
    });

    // Respond with the created user
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error("Error in register:", err);
    res.status(500).json({ message: "Server error registering user" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    console.log("Request Body:", req.body);

    // Trim email and password
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Find the user by email
    const user = await User.findOne({ where: { email: trimmedEmail } });
    console.log("User from DB:", user);

    if (!user) {
      console.log("User not found in database");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(
      trimmedPassword,
      user.password
    );
    console.log("Password Comparison Result:", isPasswordValid);
    console.log("Provided Password:", trimmedPassword);
    console.log("Hashed Password in DB:", user.password);

    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("Token Generated:", token);

    // Set the token in a cookie
    res.cookie("token", token, { httpOnly: true, secure: false });

    // Respond with success message and user data
    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ message: "Server error logging in" });
  }
}

async function userProfile(req, res) {
  try {
    const user = await User.findOne({
      where: { email: req.user.email, is_deleted: false },
      attributes: ["id", "name", "email"],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ message: "Server error fetching profile" });
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true, // إذا كنت تستخدم HTTPS، اجعلها `true`
      sameSite: "None", // يفضل ضبطه عند استخدام الكوكيز عبر النطاقات
    });

    res.status(200).json({ message: "✅ Logout successful" });
  } catch (err) {
    console.error("❌ Error in logout:", err);
    res.status(500).json({ message: "❌ Server error logging out" });
  }
};

module.exports = {
  getUsersExcludingAdmin,
  updateUserStatus,
  getUserCount,
  register,
  login,
  userProfile,
  logout,
};
