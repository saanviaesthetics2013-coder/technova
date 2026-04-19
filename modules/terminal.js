function terminal() {
  return `
    <h2>Terminal</h2>
    <input id="cmd" placeholder="type command...">
    <pre id="output"></pre>
  `;
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let cmd = document.getElementById("cmd")?.value;
    let output = document.getElementById("output");

    if (!cmd) return;

    let result = "";

    switch(cmd) {
      case "open game":
        openModule("game");
        result = "Opening game...";
        break;
      case "open ai":
        openModule("ai");
        result = "Opening AI...";
        break;
      case "clear":
        output.innerText = "";
        return;
      case "time":
        result = new Date().toLocaleTimeString();
        break;
      default:
        result = "Unknown command";
    }

    output.innerText += "\n> " + cmd + "\n" + result;
  }
});
