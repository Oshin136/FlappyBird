// // if (
//         flappy.x + flappy.radius > p.x &&
//         flappy.x - flappy.radius < p.x + this.width &&
//         flappy.y + flappy.radius > p.y &&
//         flappy.y - flappy.radius < p.y + this.height
//       ) {
//         gameState.current = gameState.over;
//       }

//       //bottom pipe
//       if (
//         flappy.x + flappy.radius > p.x &&
//         flappy.x - flappy.radius < p.x + this.width &&
//         flappy.y + flappy.radius > bottomPipePosition &&
//         flappy.y - flappy.radius < bottomPipePosition + this.height
//       ) {
//         gameState.current = gameState.over;
//       }

// const container = document.querySelector(".container");
// // const hole = 200px;

// class Pipe {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.pipe = document.createElement("div");
//   }

//   create() {
//     this.pipe.
//   }
// }

// const canvas = document.querySelector("#game");
// const canvasContext = canvas.getContext("2d");
// const sprite = new Image();
sprite.src = "assets/sprite.png";
let frames = 0;

// const degree = Math.PI / 180;

// class Background {
//   constructor(spriteX, spriteY, width, height, x, y) {
//     this.spriteX = spriteX;
//     this.spriteY = spriteY;
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//   }

//   create() {
//     canvasContext.drawImage(
//       sprite,
//       this.spriteX,
//       this.spriteY,
//       this.width,
//       this.height,
//       this.x,
//       this.y,
//       this.width,
//       this.height
//     );
//     canvasContext.drawImage(
//       sprite,
//       this.spriteX,
//       this.spriteY,
//       this.width,
//       this.height,
//       this.x + this.width,
//       this.y,
//       this.width,
//       this.height
//     );
//   }
// }

// const bg = new Background(0, 0, 275, 226, 0, canvas.height - 226);

// class Base {
//   constructor(spriteX, spriteY, width, height, x, y) {
//     this.spriteX = spriteX;
//     this.spriteY = spriteY;
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//   }

//   create() {
//     canvasContext.drawImage(
//       sprite,
//       this.spriteX,
//       this.spriteY,
//       this.width,
//       this.height,
//       this.x,
//       this.y,
//       this.width,
//       this.height,
//       (this.movement = 2)
//     );
//     canvasContext.drawImage(
//       sprite,
//       this.spriteX,
//       this.spriteY,
//       this.width,
//       this.height,
//       this.x + this.width,
//       this.y,
//       this.width,
//       this.height
//     );
//   }

//   update() {
//     if (gameState.current === gameState.inGame) {
//       this.x = ((this.x - this.movement) % this.width) / 2;
//     }
//   }
// }

// const fg = new Base(276, 0, 224, 117, 0, canvas.height - 112);

// const birdPosition = [
//   { sx: 276, sy: 112 },
//   { sx: 276, sy: 139 },
//   { sx: 276, sy: 164 },
//   { sx: 276, sy: 139 },
// ];

// class Bird {
//   constructor(width, height, x, y) {
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//     this.frame = 0;
//     this.gravity = 0.2;
//     this.jump = 3;
//     this.speed = 0;
//     this.rotation = 0;
//     this.radius = 12;
//   }

//   create() {
//     let bird = birdPosition[this.frame];
//     canvasContext.save();
//     canvasContext.translate(this.x, this.y);
//     canvasContext.rotate(this.rotation);
//     canvasContext.drawImage(
//       sprite,
//       bird.sx,
//       bird.sy,
//       this.width,
//       this.height,
//       -this.width / 2,
//       -this.height / 2,
//       this.width,
//       this.height
//     );
//     canvasContext.restore();
//   }

//   update() {
//     this.period = gameState.current === gameState.ready ? 10 : 5;
//     this.frame += frames % this.period === 0 ? 1 : 0;
//     this.frame = this.frame % birdPosition.length;

//     if (gameState.current === gameState.ready) {
//       this.y = 150;
//       this.rotation = 0 * degree;
//     } else {
//       this.speed += this.gravity;
//       this.y += this.speed;

//       if (this.y + this.height / 2 >= canvas.height - fg.height) {
//         this.y = canvas.height - fg.h - this.height / 2;
//         if (gameState.current === gameState.inGame) {
//           gameState.current = gameState.over;
//         }
//       }
//       //bird is falling down
//       if (this.speed >= this.jump) {
//         this.rotation = 90 * degree;
//         this.frame = 1;
//       } else {
//         this.rotation = -25 * degree;
//       }
//     }
//   }

//   flap() {
//     this.speed = -this.jump;
//   }
// }

// const flappy = new Bird(34, 26, 70, 150);

// class Pipes {
//   constructor(
//     topSX,
//     topSY,
//     bottomSX,
//     bottomSY,
//     width,
//     height,
//     hole,
//     maxYPosition,
//     movement
//   ) {
//     this.topsX = topSX;
//     this.topsY = topSY;
//     this.bottomX = bottomSX;
//     this.bottomY = bottomSY;
//     this.width = width;
//     this.height = height;
//     this.hole = hole;
//     this.maxYPosition = maxYPosition;
//     this.movement = movement;
//     this.pipePosition = [];
//   }

//   create() {
//     for (let i = 0; i < this.pipePosition.length; i++) {
//       let p = this.pipePosition[i];
//       let topPipePosition = p.y;
//       let bottomPipePosition = p.y + this.height + this.hole;

//       canvasContext.drawImage(
//         sprite,
//         this.topsX,
//         this.topsY,
//         this.width,
//         this.height,
//         p.x,
//         topPipePosition,
//         this.width,
//         this.height
//       );
//       canvasContext.drawImage(
//         sprite,
//         this.bottomX,
//         this.bottomY,
//         this.width,
//         this.height,
//         p.x,
//         bottomPipePosition,
//         this.width,
//         this.height
//       );
//     }
//   }

//   update() {
//     if (gameState.current !== gameState.inGame) return;
//     if (frames % 100 === 0) {
//       this.pipePosition.push({
//         x: canvas.width,
//         y: this.maxYPosition * (Math.random() + 1),
//       });
//     }
//     for (let i = 0; i < this.pipePosition.length; i++) {
//       let p = this.pipePosition[i];
//       let bottomPipePosition = p.y + this.height + this.hole;

//       //collision detection
//       //top pipe
//       if (
//         flappy.x + flappy.radius > p.x &&
//         flappy.x - flappy.radius < p.x + this.width &&
//         flappy.y + flappy.radius > p.y &&
//         flappy.y - flappy.radius < p.y + this.height
//       ) {
//         gameState.current = gameState.over;
//       }

//       //bottom pipe
//       if (
//         flappy.x + flappy.radius > p.x &&
//         flappy.x - flappy.radius < p.x + this.width &&
//         flappy.y + flappy.radius > bottomPipePosition &&
//         flappy.y - flappy.radius < bottomPipePosition + this.height
//       ) {
//         gameState.current = gameState.over;
//       }

//       p.x -= this.movement;
//       if (p.x + this.width <= 0) {
//         //delete the pipe that goes beyond the canvas
//         this.pipePosition.shift();
//         score.value += 1;
//         score.bestScore = Math.max(score.value, score.bestScore);
//         localStorage.setItem("best", score.bestScore);
//       }
//     }
//   }
// }

// const pipes = new Pipes(553, 0, 502, 0, 53, 400, 105, -150, 2);

// class StartGame {
//   constructor(spriteX, spriteY, width, height, y) {
//     this.spriteX = spriteX;
//     this.spriteY = spriteY;
//     this.width = width;
//     this.height = height;
//     this.x = canvas.width / 2 - this.width / 2;
//     this.y = y;
//   }

//   create() {
//     if (gameState.current === gameState.ready) {
//       canvasContext.drawImage(
//         sprite,
//         this.spriteX,
//         this.spriteY,
//         this.width,
//         this.height,
//         this.x,
//         this.y,
//         this.width,
//         this.height
//       );
//     }
//   }
// }

// const startGameMsg = new StartGame(0, 228, 181, 43, 200);

// class GameOver {
//   constructor(spriteX, spriteY, width, height, y) {
//     this.spriteX = spriteX;
//     this.spriteY = spriteY;
//     this.width = width;
//     this.height = height;
//     this.x = canvas.width / 2 - this.width / 2;
//     this.y = y;
//   }

//   create() {
//     if (gameState.current === gameState.over) {
//       canvasContext.drawImage(
//         sprite,
//         this.spriteX,
//         this.spriteY,
//         this.width,
//         this.height,
//         this.x,
//         this.y,
//         this.width,
//         this.height
//       );
//     }
//   }
// }
// const gameOverMsg = new GameOver(175, 228, 225, 165, 90);

// class Score {
//   constructor() {
//     this.bestScore = parseInt(localStorage.getItem("best")) || 0;
//     this.value = 0;
//   }

//   create() {
//     canvasContext.fillStyle = "#D4AC57";
//     canvasContext.strokeStyle = "black";
//     if (gameState.current === gameState.inGame) {
//       canvasContext.lineWidth = 2;
//       canvasContext.font = "50px mono";
//       canvasContext.fillText(this.value, canvas.width / 2, 50);
//       canvasContext.strokeText(this.value, canvas.width / 2, 50);
//     } else if (gameState.current === gameState.over) {
//       canvasContext.font = "30px mono";
//       canvasContext.fillText(this.value, 265, 186);
//       canvasContext.strokeText(this.value, 265, 186);
//       canvasContext.fillText(this.bestScore, 265, 228);
//       canvasContext.strokeText(this.bestScore, 265, 228);
//     }
//   }
// }

// const score = new Score();

// const gameState = {
//   current: 0,
//   ready: 0,
//   inGame: 1,
//   over: 2,
// };

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
