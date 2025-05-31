import express from "express";
import proverbsRoutes from "./routes/proverbsRoutes.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigings = [
  "http://localhost:4200",
  "https://frontend-1-ktcy.onrender.com",
];
app.use(
  cors({
    origin: allowedOrigings,
  })
);
app.use("/api/proverbs", proverbsRoutes);

app.listen(PORT, () => {
  console.log(`Afghan Proverbs API running on PORT ${PORT}`);
});
