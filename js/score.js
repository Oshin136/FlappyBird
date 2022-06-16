class Score {
  constructor() {
    this.bestScore = parseInt(localStorage.getItem("best")) || 0;
    this.value = 0;
  }

  create() {
    canvasContext.fillStyle = "#D4AC57";
    canvasContext.strokeStyle = "black";
    if (gameState.current === gameState.inGame) {
      canvasContext.lineWidth = 2;
      canvasContext.font = "50px mono";
      canvasContext.fillText(this.value, canvas.width / 2, 50);
      canvasContext.strokeText(this.value, canvas.width / 2, 50);
    } else if (gameState.current === gameState.over) {
      canvasContext.font = "30px mono";
      canvasContext.fillText(this.value, 265, 186);
      canvasContext.strokeText(this.value, 265, 186);
      canvasContext.fillText(this.bestScore, 265, 228);
      canvasContext.strokeText(this.bestScore, 265, 228);
    }
  }
}

const score = new Score();
