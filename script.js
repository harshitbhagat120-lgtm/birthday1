document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const secretNote = document.getElementById('secretNote');

  revealBtn.addEventListener('click', () => {
    secretNote.style.display = 'block';
    revealBtn.style.display = 'none'; // Optional: hides button after click
    spawnSparkles();
  });
});

function spawnSparkles() {
  const icons = ['✨', '⭐', '🌟', '💎', '🎉'];
  const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#38bdf8', '#fbbf24'];

  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.innerText = icons[Math.floor(Math.random() * icons.length)];
      
      sparkle.style.fontSize = (Math.random() * 16 + 18) + 'px';
      sparkle.style.left = Math.random() * 95 + 'vw';
      sparkle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
      
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 6000);
    }, i * 120);
  }
}
