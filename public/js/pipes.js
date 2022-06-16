class Pipes {
  constructor(
    topSX,
    topSY,
    bottomSX,
    bottomSY,
    width,
    height,
    hole,
    maxYPosition,
    movement
  ) {
    this.topsX = topSX;
    this.topsY = topSY;
    this.bottomX = bottomSX;
    this.bottomY = bottomSY;
    this.width = width;
    this.height = height;
    this.hole = hole;
    this.maxYPosition = maxYPosition;
    this.movement = movement;
    this.pipePosition = [];
  }

  create() {
    for (let i = 0; i < this.pipePosition.length; i++) {
      let p = this.pipePosition[i];
      let topPipePosition = p.y;
      let bottomPipePosition = p.y + this.height + this.hole;

      canvasContext.drawImage(
        sprite,
        this.topsX,
        this.topsY,
        this.width,
        this.height,
        p.x,
        topPipePosition,
        this.width,
        this.height
      );
      canvasContext.drawImage(
        sprite,
        this.bottomX,
        this.bottomY,
        this.width,
        this.height,
        p.x,
        bottomPipePosition,
        this.width,
        this.height
      );
    }
  }

  update() {
    if (gameState.current !== gameState.inGame) return;
    if (frames % 100 === 0) {
      this.pipePosition.push({
        x: canvas.width,
        y: this.maxYPosition * (Math.random() + 1),
      });
    }
    for (let i = 0; i < this.pipePosition.length; i++) {
      let p = this.pipePosition[i];
      let bottomPipePosition = p.y + this.height + this.hole;

      //collision detection
      //top pipe
      if (
        flappy.x + flappy.radius > p.x &&
        flappy.x - flappy.radius < p.x + this.width &&
        flappy.y + flappy.radius > p.y &&
        flappy.y - flappy.radius < p.y + this.height
      ) {
        gameState.current = gameState.over;
      }

      //bottom pipe
      if (
        flappy.x + flappy.radius > p.x &&
        flappy.x - flappy.radius < p.x + this.width &&
        flappy.y + flappy.radius > bottomPipePosition &&
        flappy.y - flappy.radius < bottomPipePosition + this.height
      ) {
        gameState.current = gameState.over;
      }

      p.x -= this.movement;
      if (p.x + this.width <= 0) {
        //delete the pipe that goes beyond the canvas
        this.pipePosition.shift();
        score.value += 1;
        score.bestScore = Math.max(score.value, score.bestScore);
        localStorage.setItem("best", score.bestScore);
      }
    }
  }
}

const pipes = new Pipes(553, 0, 502, 0, 53, 400, 105, -150, 2);
