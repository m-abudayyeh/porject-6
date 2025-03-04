const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.js");

const {
  getUsersExcludingAdmin,
  updateUserStatus,
  getUserCount,
  register,
  login,
  userProfile,
  logout,
} = require("../controllers/UserController");

router.get("/users/exclude-admin", getUsersExcludingAdmin);

router.put("/users/update-status", updateUserStatus);

router.get("/users/count", getUserCount);

router.post("/sign-up", register);
router.post("/login", login);
router.get("/profile", authMiddleware, userProfile);
router.post("/logout", logout);

module.exports = router;
