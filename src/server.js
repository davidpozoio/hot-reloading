const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require("cors");
const path = require("path");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors());

app.use("/", express.static(path.resolve(__dirname, "../client")));

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("reload", () => {
    console.log("reload");
    io.emit("reload");
  });
});

server.listen(8000, () => {
  console.log("the server has started");
});
