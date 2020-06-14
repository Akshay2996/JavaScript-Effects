const particles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  const particlesLength = Math.floor(window.innerWidth / 10);

  // Creating new particles based on the window's width
  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20, 20, 20);
  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));

    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));

    // Size
    this.size = 10;
  }

  // Update movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  // Draw single particle
  draw() {
    noStroke();
    fill("rgba(204,204,204,0.8)");
    circle(this.pos.x, this.pos.y, this.size);
  }

  // Detect Edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  // Connect Particles
  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if (d < 100) {
        stroke("rgba(204,204,204,0.2)");
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
