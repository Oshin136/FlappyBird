sprite.src = "assets/sprite.png";
let frames = 0;

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    switch (gameState.current) {
      case gameState.ready:
        gameState.current = gameState.inGame;
        break;
      case gameState.inGame:
        flappy.flap();
        break;
      case gameState.over:
        flappy.speed = 0;
        flappy.x = 34;
        pipes.pipePosition = [];
        score.value = 0;
        gameState.current = gameState.ready;
        break;
      default:
        break;
    }
  }
});

function draw() {
  canvasContext.fillStyle = "#70c5ce";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  bg.create();
  fg.create();
  fg.update();
  flappy.create();
  flappy.update();
  pipes.create();
  pipes.update();
  gameOverMsg.create();
  startGameMsg.create();
  score.create();
}

function play() {
  frames++;
  draw();
  requestAnimationFrame(play);
}

play();
