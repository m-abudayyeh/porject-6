const { CreditCard } = require("../models");

// إضافة بطاقة جديدة
exports.addCreditCard = async (req, res) => {
  try {
    const { cardholder_name, card_number, expiration_date, cvv } = req.body;

    // تحقق من وجود جميع الحقول
    if (!cardholder_name || !card_number || !expiration_date || !cvv) {
      return res.status(400).json({ message: "يجب ملء جميع الحقول!" });
    }

    const newCard = await CreditCard.create({
      cardholder_name,
      card_number,
      expiration_date,
      cvv,
    });

    res
      .status(201)
      .json({ message: "تمت إضافة البطاقة بنجاح!", card: newCard });
  } catch (error) {
    console.error("خطأ في إضافة البطاقة:", error);
    res.status(500).json({ message: "حدث خطأ في السيرفر." });
  }
};

// جلب جميع البطاقات
exports.getAllCreditCards = async (req, res) => {
  try {
    const cards = await CreditCard.findAll();
    res.json(cards);
  } catch (error) {
    console.error("خطأ في جلب البطاقات:", error);
    res.status(500).json({ message: "حدث خطأ في السيرفر." });
  }
};

// حذف بطاقة
exports.deleteCreditCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await CreditCard.findByPk(id);

    if (!card) {
      return res.status(404).json({ message: "البطاقة غير موجودة." });
    }

    await card.destroy();
    res.json({ message: "تم حذف البطاقة بنجاح." });
  } catch (error) {
    console.error("خطأ في حذف البطاقة:", error);
    res.status(500).json({ message: "حدث خطأ في السيرفر." });
  }
};
