console.log("Welcome to Tic Tac Toe");
let music = new Audio('theme.mp3')
let audioTurn = new Audio('click.mp3')
let audioGameover = new Audio('end.mp3')
let turn = "X"
let gameover = false

// Function to change the turn
const changeTurn = ()=>{

    return turn === "X"? "0" : "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,0.3,15,45],
        [2,4,6,0,15,135]
    ]

    wins.forEach(e =>{
        if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '256px';
            document.querySelector('.line').style.display = 'block';
            if (e[5] === 45 || e[5] === 135) {
                document.querySelector('.line').style.width = '30vw';
            } else {
                document.querySelector('.line').style.width = '20vw';
            }
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // document.querySelector('.line').style.width = '20vw';
        }
    })
}

// Game Logic
let start = document.getElementById('start');
start.addEventListener('click', ()=>{
    let welcome = document.getElementsByClassName('welcome')[0];
    welcome.style.display = 'none';
    let game = document.getElementsByClassName('gameContainer')[0];
    game.style.display = 'flex';
    music.play()
})

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        music.play()
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play()
            checkWin();
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// RESET
reset.addEventListener('click', ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach((element)=>{
        element.innerText = '';
    })
    yay.style.width = '0px'
    let i = document.getElementsByClassName('info')[0];
    turn = "X"
    gameover = false;
    i.innerText = "Turn for " + turn;
    let line = document.getElementsByClassName('line')[0];
    line.style.display = 'none';
})