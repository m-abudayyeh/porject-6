const express = require("express");
const cors = require("cors");
const { Project } = require("./models");
// const articleRoutes = require('./routes/articleRoutes');
const articleRoutes = require("./routers/articleRoutes");
const adminRoutes = require("./routers/adminRoutes");
const userRoutes = require("./routers/userRoutes");
const contactMessagesRoutes = require("./routers/contactMessagesRoutes");
const donorRoutes = require("./routers/donorRoutes");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const projectRoutes = require('./routers/projectRoutes');
const creditCardRoutes = require("./routers/creditCardRoutes");


const app = express();
const PORT = process.env.PORT || 9562;

app.use(
  cors({
    origin: "http://localhost:5173", // اسم مصدر العميل
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // السماح باستخدام الكوكيز
  })
);
app.use(express.json());
app.use(cookieParser());
// ✅ استرجاع جميع المشاريع
app.get("/api/projects", async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

app.use("/api/articles", articleRoutes);
app.use("/api", adminRoutes);
app.use("/api", userRoutes);
app.use("/api", contactMessagesRoutes);
app.use("/api/donors", donorRoutes);
app.use('/api/projects', projectRoutes); 
app.use("/api/credit-cards", creditCardRoutes);


// ✅ التعامل مع أخطاء المسارات غير الموجودة
app.use((req, res, next) => {
  res.status(404).json({ message: "🚫 Route not found" });
});

// ✅ التعامل مع الأخطاء العامة
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ message: "❌ Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
