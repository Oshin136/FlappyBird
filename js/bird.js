class Bird {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.gravity = 0.2;
    this.jump = 3;
    this.speed = 0;
    this.rotation = 0;
    this.radius = 12;
  }

  create() {
    let bird = birdPosition[this.frame];
    canvasContext.save();
    canvasContext.translate(this.x, this.y);
    canvasContext.rotate(this.rotation);
    canvasContext.drawImage(
      sprite,
      bird.sx,
      bird.sy,
      this.width,
      this.height,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    canvasContext.restore();
  }

  update() {
    this.period = gameState.current === gameState.ready ? 10 : 5;
    this.frame += frames % this.period === 0 ? 1 : 0;
    this.frame = this.frame % birdPosition.length;

    if (gameState.current === gameState.ready) {
      this.y = 150;
      this.rotation = 0 * degree;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;

      if (this.y + this.height / 2 >= canvas.height - fg.height) {
        this.y = canvas.height - fg.h - this.height / 2;
        if (gameState.current === gameState.inGame) {
          gameState.current = gameState.over;
        }
      }
      //bird is falling down
      if (this.speed >= this.jump) {
        this.rotation = 90 * degree;
        this.frame = 1;
      } else {
        this.rotation = -25 * degree;
      }
    }
  }

  flap() {
    this.speed = -this.jump;
  }
}

const flappy = new Bird(34, 26, 70, 150);
