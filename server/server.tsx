import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const app = express();

app.use(express.static(path.resolve(__dirname, "../")));

app.get("*", (req: Request, res: Response) => {
  const appHtml = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  fs.readFile(
    path.resolve(__dirname, "../", "index.html"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.status(500).send("Error occurred");
      }

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      );
    }
  );
});

app.get("/test", (req: Request, res: Response) => {
  return res.send("Test is work")
});

app.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});
