//console.log("Js подключён!");
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
let gameTable = document.querySelectorAll("td");
console.log(gameTable);
let snake = [424, 425, 426, 427];
//snake = [424, 374, 324, 274];

let snakeDirection = ['right', 'right', 'right', 'right'];
//snakeDirection = ['down', 'down', 'down', 'down'];

for (let i = 0; i < snake.length; i++){
    gameTable[snake[i]].classList.add("snake");
}
(show = (o) => setInterval(() => {
    for (let i = 0; i < snake.length; i++){
        if (snakeDirection[i] == 'right')
        {
            if (i==0){
                gameTable[snake[i]].classList.remove("snake");
            }
            if (Number.isInteger((snake[i]+1)/50)){
                snake[i] -= 49;
            }
            else {
                snake[i]++;
            }
            if (i==snake.length-1){
                gameTable[snake[i]].classList.add("snake");
            }
        } else if (snakeDirection[i] == 'left')
        {
            if (i==0){
                gameTable[snake[i]].classList.add("snake");
            }
            if (i==snake.length-1){
                gameTable[snake[i]].classList.remove("snake");
            }
            if (Number.isInteger((snake[i])/50)){
                snake[i] += 49;
            }
            else {
                snake[i]--;
            }
        } else if (snakeDirection[i] == 'top')
        {
            if (i==snake.length-1){
                gameTable[snake[i]].classList.add("snake");
            }
            if (i==0){
                gameTable[snake[i]].classList.remove("snake");
            }
            if (snake[i] < 50){
                snake[i] += 950;
            }
            else {
                snake[i] -=50;
            }
        } else if (snakeDirection[i] == 'down')
        {
            if (i==0){
                gameTable[snake[i]].classList.add("snake");
            }
            if (i==snake.length-1){
                gameTable[snake[i]].classList.remove("snake");
            }
            if (snake[i] > 950){
                snake[i] -= 950;
            }
            else {
                snake[i] +=50;
            }
        }
    } 
}, 1000))(1);