const music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
  if (!isPlaying) { music.play(); isPlaying = true; }
  else { music.pause(); isPlaying = false; }
}

function sendLove() {
  if (!isPlaying) { music.play(); isPlaying = true; }

  const emojis = ["💖","💘","💗","💕","💞"];
  for(let i=0;i<20;i++){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (3+Math.random()*3) + "s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),7000);
  }
}
