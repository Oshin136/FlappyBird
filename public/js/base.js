class Base {
  constructor(spriteX, spriteY, width, height, x, y) {
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  create() {
    canvasContext.drawImage(
      sprite,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height,
      (this.movement = 2)
    );
    canvasContext.drawImage(
      sprite,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    if (gameState.current === gameState.inGame) {
      this.x = ((this.x - this.movement) % this.width) / 2;
    }
  }
}

const fg = new Base(276, 0, 224, 117, 0, canvas.height - 112);
