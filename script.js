
// LOADING SEQUENCE
setTimeout(()=>{
  document.getElementById("loader").style.display="none";
  document.getElementById("desktop").classList.remove("hidden");
  document.getElementById("dock").classList.remove("hidden");
},2500);

// WINDOW CONTROL
function openWin(id){
  document.getElementById(id).classList.remove("hidden");
}

function closeWin(id){
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

// AI (SMART SIMULATION)
function askAI(){
  let q=document.getElementById("aiInput").value;

  let replies=[
    "That idea has strong potential.",
    "Focus on simplicity and execution.",
    "You are building something real.",
    "Keep iterating — you're close.",
    "This could become a product."
  ];

  document.getElementById("aiOut").innerText =
    replies[Math.floor(Math.random()*replies.length)];
}

// GAME
function game(){
  let n=Math.floor(Math.random()*10)+1;
  let g=prompt("Guess 1-10");
  document.getElementById("gameOut").innerText =
    (g==n ? "You Win 🎉" : "Try Again ❌");
}

/* DRAG SYSTEM */
let current=null, offsetX=0, offsetY=0;

function dragStart(e,id){
  current=document.getElementById(id);
  offsetX=e.clientX-current.offsetLeft;
  offsetY=e.clientY-current.offsetTop;

  document.onmousemove=dragMove;
  document.onmouseup=()=>current=null;
}

function dragMove(e){
  if(!current) return;

  current.style.left=(e.clientX-offsetX)+"px";
  current.style.top=(e.clientY-offsetY)+"px";
}
