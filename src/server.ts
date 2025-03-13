import express, { Request, Response } from "express";
import { sum } from "./index";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript server!");
});

app.get("/sum", (req: Request, res: Response) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: "Invalid numbers" }); //res.send("Invalid numbers"); //return res.status(400).json({ error: "Invalid numbers" });
  }
  res.json({ result: sum(a, b) });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
