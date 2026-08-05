import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router: IRouter = Router();

router.get("/drive/file", async (req, res) => {
  try {
    const connectors = new ReplitConnectors();
    const response = await connectors.proxy(
      "google-drive",
      "/drive/v3/files?pageSize=1&fields=files(id,name)",
      { method: "GET" },
    );
    const data = await response.json() as { files?: { id: string; name: string }[] };
    const file = data.files?.[0];
    if (!file) {
      res.status(404).json({ error: "No files found in Google Drive" });
      return;
    }
    res.json({ name: file.name });
  } catch (err) {
    req.log.error({ err }, "Failed to fetch Google Drive file");
    res.status(500).json({ error: "Failed to fetch file from Google Drive" });
  }
});

export default router;
