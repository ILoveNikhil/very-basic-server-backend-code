import { app } from "./app.js";
import { connectDB } from "./config/db.js";

// connect db -- Database
connectDB();

// server
app.get("/", (req, res) => {
  res.send("<h1>Server is working </h1>");
});

// listen PORT
const port = process.env.PORT || 5000;
const host = process.env.HOST;
app.listen(port, () => {
  console.log(`Server is running on ${host}:${port}`);
});
