require("dotenv").config();
const cors=require("cors")
const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
console.log(User);
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
const projectRoutes = require("./routes/projectRoutes");

app.get("/", (req, res) => {
  res.send("Welcome to CodeConnect");
});

const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});