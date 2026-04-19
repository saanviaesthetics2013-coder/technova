
// OPEN / CLOSE APPS
function openApp(id){
  document.getElementById(id).classList.remove("hidden");
}

function closeApp(id){
  document.getElementById(id).classList.add("hidden");
}

// NOTES
function addNote(){
  let v=document.getElementById("noteInput").value;
  let data=JSON.parse(localStorage.getItem("notes")||"[]");

  data.push(v);
  localStorage.setItem("notes",JSON.stringify(data));

  render();
}

function render(){
  let data=JSON.parse(localStorage.getItem("notes")||"[]");

  document.getElementById("noteList").innerHTML =
    data.map(n=>`<li>${n}</li>`).join("");
}
render();

// AI (SIMULATION)
function askAI(){
  let q=document.getElementById("aiInput").value;

  let replies=[
    "That’s a strong idea.",
    "Focus on simplicity.",
    "You are building something useful.",
    "Keep iterating.",
    "Looks promising."
  ];

  document.getElementById("aiOut").innerText =
    replies[Math.floor(Math.random()*replies.length)];
}

// GAME
function game(){
  let n=Math.floor(Math.random()*10)+1;
  let g=prompt("Guess 1-10");
  document.getElementById("gameOut").innerText =
    (g==n?"Win 🎉":"Try again ❌");
}
