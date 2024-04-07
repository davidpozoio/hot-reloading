const socket = io("http://localhost:8000");

socket.on("reload", () => {
  window.location.reload();
});
