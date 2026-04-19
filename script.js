// LOADER
window.onload = () => {
  setTimeout(()=> {
    document.getElementById("loader").style.display="none";
  },2000);
};

// PARTICLES
const c = document.getElementById("bg");
const ctx = c.getContext("2d");
c.width=innerWidth;
c.height=innerHeight;

let particles = Array.from({length:80},()=>({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  vx:(Math.random()-0.5),
  vy:(Math.random()-0.5)
}));

function draw() {
  ctx.clearRect(0,0,c.width,c.height);
  particles.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;
    if(p.x<0||p.x>c.width) p.vx*=-1;
    if(p.y<0||p.y>c.height) p.vy*=-1;
    ctx.fillStyle="cyan";
    ctx.fillRect(p.x,p.y,2,2);
  });
  requestAnimationFrame(draw);
}
draw();

// TYPING
let text="Next Gen Experience • Futuristic UI • Smart Tools";
let i=0;
(function type(){
  if(i<text.length){
    document.getElementById("typing").textContent+=text[i++];
    setTimeout(type,40);
  }
})();

// ENTER
function enter(){
  document.getElementById("landing").style.display="none";
  document.getElementById("app").classList.remove("hidden");
  route("games");
}

// ROUTING
function route(id){
  document.querySelectorAll(".page").forEach(p=>p.style.display="none");
  document.getElementById(id).style.display="block";
}

// GAME
let num=Math.floor(Math.random()*10)+1;
function guess(){
  let v=document.getElementById("guess").value;
  document.getElementById("g").textContent = v==num ? "WIN 🔥" : "TRY AGAIN";
}

// NOTES
function load(){
  let d=JSON.parse(localStorage.getItem("n")||"[]");
  let l=document.getElementById("list");
  l.innerHTML="";
  d.forEach((n,i)=>{
    let li=document.createElement("li");
    li.innerHTML=`${n} <button onclick="del(${i})">❌</button>`;
    l.appendChild(li);
  });
}
function add(){
  let v=document.getElementById("note").value;
  let d=JSON.parse(localStorage.getItem("n")||"[]");
  d.push(v);
  localStorage.setItem("n",JSON.stringify(d));
  load();
}
function del(i){
  let d=JSON.parse(localStorage.getItem("n"));
  d.splice(i,1);
  localStorage.setItem("n",JSON.stringify(d));
  load();
}
load();

// NEWS
function news(){
  let a=document.getElementById("area").value;
  window.open(`https://news.google.com/search?q=${a}`);
}

// VOICE
function speak(){
  let r=new (window.SpeechRecognition||window.webkitSpeechRecognition)();
  r.onresult=e=>{
    document.getElementById("speech").textContent=e.results[0][0].transcript;
  };
  r.start();
}
