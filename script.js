function openModule(name) {
  const container = document.getElementById("module-container");
  container.innerHTML = window[name]();
}

/* 🌌 Particle + mouse effect */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5)
  });
}

let mouse = {x:0,y:0};

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    let dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);

    if (dist < 100) {
      p.x += (p.x - mouse.x) * 0.02;
      p.y += (p.y - mouse.y) * 0.02;
    }

    p.x += p.dx;
    p.y += p.dy;

    ctx.fillStyle = "cyan";
    ctx.fillRect(p.x, p.y, 2, 2);
  });

  requestAnimationFrame(animate);
}
animate();

/* 🎧 sound */
function toggleSound() {
  let audio = document.getElementById("bg-sound");
  if (audio.paused) audio.play();
  else audio.pause();
}

/* 🌗 mood theme */
let hour = new Date().getHours();
if (hour > 6 && hour < 18) {
  document.body.classList.add("day");
} else {
  document.body.classList.add("night");
}
