// // Lấy các phần tử HTML cần thiết
// const game = document.querySelector('#game');
// const ball = document.querySelector('#ball');
// const paddle = document.querySelector('#paddle');
// const bricks = document.querySelector('#bricks');


// // Thiết lập các biến
// let x = 235;
// let y = 150;
// let dx = 2;
// let dy = -2;
// let paddleX = 200;
// let rightPressed = false;
// let leftPressed = false;


// // Thiết lập các hàm
// function drawBall() {
//     ball.style.top = y + 'px';
//     ball.style.left = x + 'px';
// }


// function drawPaddle() {
//     paddle.style.left = paddleX + 'px';
// }


// function drawBricks() {
//     for (let i = 0; i < 24; i++) {
//         const brick = document.createElement('div');
//         brick.classList.add('brick');
//         brick.style.top = Math.floor(i / 6) * 25 + 'px';
//         brick.style.left = (i % 6) * 80 + 'px';
//         bricks.appendChild(brick);
//     }
// }


// // Thiết lập các sự kiện
// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);


// // Hàm xử lý sự kiện khi phím được nhấn
// function keyDownHandler(event) {
//     if (event.key === 'Right' || event.key === 'ArrowRight') {
//         rightPressed = true;
//     } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
//         leftPressed = true;
//     }
// }


// // Hàm xử lý sự kiện khi phím được thả ra
// function keyUpHandler(event) {
//     if (event.key === 'Right' || event.key === 'ArrowRight') {
//         rightPressed = false;
//     } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
//         leftPressed = false;
//     }
// }


// // Hàm xử lý va chạm giữa bóng và viên gạch
// function collisionDetection() {
//     const bricksArray = document.querySelectorAll('.brick');
//     bricksArray.forEach(brick => {
//         const brickRect = brick.getBoundingClientRect();
//         if (x > brickRect.left && x < brickRect.right &&
//             y > brickRect.top && y < brickRect.bottom) {
//             dy = -dy;
//             brick.remove();
//         }
//     });
// }

// // Hàm chạy trò chơi
// function gameLoop() {
//     x += dx;
//     y += dy;

//     if (x + dx > game.offsetWidth - ball.offsetWidth || x + dx < 0) {
//         dx = -dx;
//     }
    
//     if (y + dy < 0) {
//         dy = -dy;
//     } else if (y + dy > game.offsetHeight - ball.offsetHeight) {
//         if (x > paddle.offsetLeft && x < paddle.offsetLeft + paddle.offsetWidth) {
//             dy = -dy;
//         } else {
//             alert('GAME OVER!');
//             document.location.reload();
//         }
//     }
    
//     if (rightPressed && paddleX < game.offsetWidth - paddle.offsetWidth) {
//         paddleX += 5;
//     } else if (leftPressed && paddleX > 0) {
//         paddleX -= 5;
//     }
    
//     drawBall();
//     drawPaddle();
//     collisionDetection();
    
//     requestAnimationFrame(gameLoop);    
// }

// drawBricks();
// gameLoop();

// // Khai báo các biến
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// var ballRadius = 10;
// var x = canvas.width/2;
// var y = canvas.height-30;
// var dx = 2;
// var dy = -2;

// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width-paddleWidth)/2;

// var rightPressed = false;
// var leftPressed = false;

// var brickRowCount = 3;
// var brickColumnCount = 5;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;

// var bricks = [];
// for(var c=0; c<brickColumnCount; c++) {
//     bricks[c] = [];
//     for(var r=0; r<brickRowCount; r++) {
//         bricks[c][r] = { x: 0, y: 0, status: 1 };
//     }
// }

// var score = 0;

// // Vẽ bóng
// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// // Vẽ thanh điều khiển
// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// // Vẽ viên gạch
// function drawBricks() {
//     for(var c=0; c<brickColumnCount; c++) {
//         for(var r=0; r<brickRowCount; r++) {
//             if(bricks[c][r].status == 1) {
//                 var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
//                 var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
//                 bricks[c][r].x = brickX;
//                 bricks[c][r].y = brickY;
//                 ctx.beginPath();
//                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
//                 ctx.fillStyle = "#0095DD";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }
//     }
// }

// // Kiểm tra va chạm giữa bóng và viên gạch
// function collisionDetection() {
//     for(var c=0; c<brickColumnCount; c++) {
//         for(var r=0; r<brickRowCount; r++) {
//             var b = bricks[c][r];
//             if(b.status == 1) {
//                 if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
//                     dy = -dy;
//                     b.status = 0;
//                     score++;
//                     if(score == brickRowCount*brickColumnCount) {
//                         alert("YOU WIN, CONGRATS!");
//                         document.location.reload();
//                     }
//                 }
//             }
//         }
//     }
// }

// // Vẽ điểm số
// function drawScore() {
//     ctx.font = "16px Arial";
//     ctx.fillStyle = "#0095DD";
//     ctx.fillText("Score: "+score, 8, 20);
// }

// // Xử lý khi bóng chạm tường hoặc thanh điều khiển
// function wallCollision() {
//     if (x + dx > canvas.width - ballRadius || x - ballRadius < 0) { // Fix conditional operator (replace = with ==)
//         dx = -dx;
//     }
//     if (y + dy < ballRadius) {
//         // bóng chạm tường trên
//         dy = -dy;
//     } else if (y + dy > canvas.height - ballRadius) {
//         if (x > paddleX && x < paddleX + paddleWidth) {
//             dy = -dy;
//         } else {
//             alert("GAME OVER");
//             document.location.reload();
//         }
//     }
// }

// function movePaddle() {
//     if (rightPressed && paddleX < canvas.width - paddleWidth) {
//         paddleX += 7;
//     } else if (leftPressed && paddleX > 0) {
//         paddleX -= 7;
//     }
// }

// function keyDownHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = true;
//     } else if (e.keyCode == 37) {
//         leftPressed = true;
//     }
// }

// function keyUpHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = false;
//     } else if (e.keyCode == 37) {
//         leftPressed = false;
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBricks();
//     drawBall();
//     drawPaddle();
//     drawScore();
//     collisionDetection();
//     wallCollision();
//     movePaddle();
//     x += dx;
//     y += dy;
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
// setInterval(draw, 10);
// Khai báo các biến
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

var score = 0;

// Vẽ bóng
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Vẽ thanh điều khiển
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Vẽ viên gạch
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status === 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

// Kiểm tra va chạm giữa bóng và viên gạch
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status === 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score === brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

// Vẽ điểm số
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

// Xử lý khi bóng chạm tường hoặc thanh điều khiển
function wallCollision() {
    if (x + dx > canvas.width - ballRadius || x - ballRadius < 0) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        // bóng chạm tường trên
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
}

function movePaddle() {
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

function keyDownHandler(event) {
    if (event.keyCode === 39 || event.key === 'Right' || event.key === 'ArrowRight') {
        rightPressed = true;
    } else if (event.keyCode === 37 || event.key === 'Left' || event.key === 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.keyCode === 39 || event.key === 'Right' || event.key === 'ArrowRight') {
        rightPressed = false;
    } else if (event.keyCode === 37 || event.key === 'Left' || event.key === 'ArrowLeft') {
        leftPressed = false;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();
    wallCollision();
    movePaddle();
    x += dx;
    y += dy;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
setInterval(draw, 10);


