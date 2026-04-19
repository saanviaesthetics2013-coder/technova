function ai() {
  return `
    <h2>AI Assistant</h2>
    <input id="ai-input" placeholder="Ask something...">
    <button onclick="askAI()">Send</button>
    <p id="ai-output"></p>
  `;
}

function askAI() {
  let input = document.getElementById("ai-input").value;
  let output = document.getElementById("ai-output");

  let responses = {
    "hello": "Hello, human.",
    "who are you": "I am Neo AI.",
    "time": new Date().toLocaleTimeString()
  };

  output.innerText = responses[input.toLowerCase()] || "Processing...";
}
