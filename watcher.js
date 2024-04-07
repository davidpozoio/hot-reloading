const fs = require("fs");
const path = require("path");
const { io } = require("socket.io-client");

const socket = io("http://localhost:8000", { autoConnect: true });

socket.on("connect", () => {
  console.log("connected");
});

socket.on("error", () => {
  console.log("error");
});

/* fs.watch("text", (eventType, filename) => {
  console.log("text changed in ", filename);
  const text = fs.readFileSync(path.join("text", filename));
  fs.writeFileSync("target.txt", text);
}); */

fs.watch("client/index.html", () => {
  socket.emit("reload");
  console.log("reload");
});
