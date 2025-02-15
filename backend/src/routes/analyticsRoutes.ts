import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { roleMiddleware } from "../middleware/roleMiddleware";

const router = Router();
router.use(authMiddleware, roleMiddleware(["Admin"]));

router.get("/usage", async (req: Request, res: Response) => {
  // Implement actual analytics logic here
  res.json({ usage: "stats" });
});

export default router;
