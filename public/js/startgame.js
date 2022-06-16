class StartGame {
  constructor(spriteX, spriteY, width, height, y) {
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.width = width;
    this.height = height;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = y;
  }

  create() {
    if (gameState.current === gameState.ready) {
      canvasContext.drawImage(
        sprite,
        this.spriteX,
        this.spriteY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }
}

const startGameMsg = new StartGame(0, 228, 181, 43, 200);
