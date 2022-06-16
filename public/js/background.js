class Background {
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
      this.height
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
}

const bg = new Background(0, 0, 275, 226, 0, canvas.height - 226);
