const canvas = document.querySelector("#game");
const canvasContext = canvas.getContext("2d");
const sprite = new Image();
const degree = Math.PI / 180;
const birdPosition = [
  { sx: 276, sy: 112 },
  { sx: 276, sy: 139 },
  { sx: 276, sy: 164 },
  { sx: 276, sy: 139 },
];
const gameState = {
  current: 0,
  ready: 0,
  inGame: 1,
  over: 2,
};
