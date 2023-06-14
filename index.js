// Game Constants & Variables
let inputDir = {x: 0, y: 0}; 
const foodSound = new Audio('food eating sound.mp3');
const gameOverSound = new Audio('diening sound.mp3');
const moveSound = new Audio('new life.mp3');
const musicSound = new Audio('soundtrack for entire game.mp3');
let speed = 10;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
];
food1 = { x: 6, y: 15 };
food2 = { x: 1, y: 12 };
food3 = { x: 25, y: 19};
food4={x:1,y:18};
let red=2;
let blue=0;
let yellow=1;
let seconds=60;

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}

function isCollide(snake) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
        if (snake[0].x >= 20 || snake[0].x <= 0 || snake[0].y >= 20 || snake[0].y <= 0) {
            return true;
        }


    }
}
function move1() {
    console.log("ArrowUp");
    inputDir.x = 0;
    inputDir.y = -1;   
}
function move2() {
    console.log("ArrowDown");
    inputDir.x = 0;
    inputDir.y = 1;
}
function move3() {
    console.log("ArrowLeft");
    inputDir.x = -1;
    inputDir.y = 0;
}
function move4() {
    console.log("ArrowRight");
    inputDir.x = 1;
    inputDir.y = 0;
}



function gameEngine(){
    // Part 1: Updating the snake array & Food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir =  {x: 0, y: 0}; 
        alert("Game Over. Press any key to play again!");
        snakeArr = [{x: 13, y: 15}];
        musicSound.play();
        score = 0; 
        let red=2;
        let blue=0;
        let yellow=1;
        let seconds=60;

    }

    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].x===food1.x && snakeArr[0].y===food1.y){
        red++;
        if(red===yellow+2 && red===blue+3){
         snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
             
             let a=2;
             let b=16;
             food1 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
             score++;
             scoreBox.innerHTML="Score :"+ score;
        }
        else{
         gameoversound.play();
         alert("Game Over");
         snakeArr[{
             x:13,y:15
         }]
         inputDir.x=0;
         inputDir.y=0;
         seconds=60;
         scorebox.textContent="score:0";
         score=0;
         red=2;yellow=1;blue=0;
 
     }
 
     }
     if(snakeArr[0].x===food2.x && snakeArr[0].y===food2.y){
         yellow++;
         if(red==yellow+1 && blue==yellow-2){
             foodsound.play();
             snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
             
             let a=2;
             let b=18;
             food2 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
             score++;
             scoreBox.innerHTML="Score :"+ score;
 
         }
         else{
             gameoversound.play();
             alert("Game Over");
             snakeArr[{
                 x:13,y:15
             }]
             inputDir.x=0;
             inputDir.y=0;
             seconds=60;
             scorebox.textContent="score:0";
             score=0;
             red=2;yellow=1;blue=0;
 
         }
 
     }
     if(snakeArr[0].x===food3.x && snakeArr[0].y===food3.y){
         blue++;
         if( red===blue+2 && yellow===blue+1){
             foodsound.play();
             snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
             
             let a=2;
             let b=18;
             food3 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
             score++;
             scoreBox.innerHTML="Score :"+ score;
             
            
 
         }
         else{
             gameoversound.play();
             alert("Game Over");
             snakeArr[{
                 x:13,y:15
             }]
             inputDir.x=0;
             inputDir.y=0;
             seconds=60;
             scorebox.textContent="score:0";
             score=0;
             red=2;yellow=1;blue=0;
 
         }
     }
     if(snakeArr[0].x===food4.x && snakeArr[0].y===food4.y){
         seconds=seconds+4;
         let a=2;
         let b=18;
         food4 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
         
     }

     scoreBox.innerHTML="Score :"+ score;


    // Moving the snake
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;



// Part 2: Display the snake and Food   
food1Element = document.createElement('div');
food1Element.style.gridRowStart = food1.y;
food1Element.style.gridColumnStart = food1.x;
food1Element.classList.add('food1');
board.appendChild(food1Element);

food2Element = document.createElement('div');
food2Element.style.gridRowStart = food2.y;
food2Element.style.gridColumnStart = food2.x;
food2Element.classList.add('food2');
board.appendChild(food2Element);

food3Element = document.createElement('div');
food3Element.style.gridRowStart = food3.y;
food3Element.style.gridColumnStart = food3.x;
food3Element.classList.add('food3');
board.appendChild(food3Element);

food4Element = document.createElement('div');
food4Element.style.gridRowStart = food4.y;
food4Element.style.gridColumnStart = food4.x;
food4Element.classList.add('food4');
board.appendChild(food4Element);

}

// Main logic starts here
musicSound.play();
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HiScore: " + hiscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }})

