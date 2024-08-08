import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { slug } = req.query;
  const filePath = path.join(process.cwd(), slug[0]);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    res.setHeader("Content-Type", "application/typescript");
    res.status(200).send(fileContent);
  } catch (error) {
    console.error("Error reading TypeScript file:", error);
    res.status(404).json({ error: "File not found" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
