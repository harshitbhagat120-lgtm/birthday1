document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const secretNote = document.getElementById('secretNote');
  const particleContainer = document.getElementById('particle-container');

  revealBtn.addEventListener('click', () => {
    // 1. Expand the message box (trigger CSS transition)
    secretNote.classList.add('open');
    
    // 2. Hide the button after use
    revealBtn.style.display = 'none';

    // 3. Trigger the cute particle burst
    spawnCuteParticles();
  });
});

function spawnCuteParticles() {
  const icons = ['✨', '⭐', '🌟', '💖', '🎈'];
  const colors = ['#ff8a65', '#ffd54f', '#4db6ac', '#7986cb', '#f06292'];
  const numParticles = 40;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'cute-particle';
    
    // Random icon
    particle.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    // Random styling
    particle.style.fontSize = (Math.random() * 15 + 18) + 'px'; // Random size
    particle.style.left = Math.random() * 100 + 'vw'; // Random horizontal start
    particle.style.top = (Math.random() * 50 + 50) + 'vh'; // Start in the bottom half
    particle.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random animation duration for variance
    const duration = (Math.random() * 3 + 2) + 's';
    particle.style.animationDuration = duration;
    
    particleContainer.appendChild(particle);

    // Remove particle after animation ends
    setTimeout(() => {
      particle.remove();
    }, parseFloat(duration) * 1000);
  }
}
