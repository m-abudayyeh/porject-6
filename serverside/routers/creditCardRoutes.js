const express = require("express");
const router = express.Router();
const creditCardController = require("../controllers/creditCardController");

// مسارات التعامل مع البطاقات
router.post("/add", creditCardController.addCreditCard); // إضافة بطاقة
router.get("/", creditCardController.getAllCreditCards); // جلب جميع البطاقات
router.delete("/:id", creditCardController.deleteCreditCard); // حذف بطاقة

module.exports = router;
