const express = require("express");
const connection = require("./configs/db.js");

const userRoute = require("./routes/user.route.js");
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(userRoute);
const PORT =8080;

app.listen(PORT, async () => {
  try {
    console.log("DB Connecting...");
    await connection;
    console.log("DB Connected!");
  } catch (error) {
    console.log("DB Connection Error:", error);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});