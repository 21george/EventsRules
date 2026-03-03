const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { initSendGrid } = require("./utils/sendgrid");
const contactRoutes = require("./routes/contact");

const app = express();

const port = Number(process.env.PORT || 5000);
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("Missing MONGODB_URI environment variable");
  process.exit(1);
}

const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
    credentials: false,
  }),
);

app.use(express.json({ limit: "200kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api", contactRoutes);

async function start() {
  try {
    initSendGrid();
    await mongoose.connect(mongoUri);

    app.listen(port, () => {
      console.log(`API listening on port ${port}`);
    });
  } catch (error) {
    console.error("API startup error:", error);
    process.exit(1);
  }
}

start();
