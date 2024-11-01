const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require("./routes/bookRoutes")
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { swaggerUi, swaggerDocs } = require("./swagger");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: process.env.JWT_SECRET, resave: false, saveUninitialized: false }));
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));


connectDB();
app.listen(5000, () => console.log('Server berjalan di http://localhost:5000'));