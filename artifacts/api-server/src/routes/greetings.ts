import { Router, type IRouter } from "express";
import { db, greetingsTable } from "@workspace/db";

const router: IRouter = Router();

router.get("/greetings", async (req, res) => {
  try {
    const records = await db.select().from(greetingsTable).orderBy(greetingsTable.id);
    res.json(records);
  } catch (err) {
    req.log.error({ err }, "Failed to load greetings");
    res.status(500).json({ error: "Could not load database records" });
  }
});

export default router;
