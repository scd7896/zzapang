const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const fs = require("fs");
const handle = app.getRequestHandler();
const path = require("path");
const prod = process.env.NODE_ENV === "production";
const morgan = require("morgan");
const uuid = require("uuid");

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(
    morgan("common", {
      stream: fs.createWriteStream(path.join(__dirname, "logs/access.log"), {
        flags: "a+",
      }),
    })
  );

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(prod ? process.env.PORT : 10023, () => {
    console.log(`프론트 서버는 ${process.env.PORT}`);
  });
});
