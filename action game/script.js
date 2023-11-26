score = 0
cross = true;

audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
setTimeout(()=>{
    audio.play();
},1000);
document.onkeydown = function(e){
    // console.log('key code is:', e.key);
    if (e.key === 'ArrowUp' || e.key == ' ') {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },700);
    }
    else if (e.key === 'ArrowRight') {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    else if (e.key === 'ArrowLeft') {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }
}


setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if (offsetX < 113 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to play again";
        obstacle.classList.remove('obstacleAni');
        cross = false;
        audiogo.play()
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000);
    }
    else if (cross && offsetX < 145){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        }, 1000);

        setTimeout(()=>{

            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + "s";
        },500);
    }
},100)

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}