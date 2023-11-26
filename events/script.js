// let b1 = document.getElementsByClassName('btn')[0];
// let b2 = document.getElementsByClassName('btn')[1];
// let b3 = document.getElementsByClassName('btn')[2];

// let b = document.getElementsByClassName('btn');

// let f = function(e) {
//     this.style.position = 'absolute';
//     this.style.right = '0';
// }

// Array.from(b).forEach(element=>{
//     element.addEventListener('click', f);
// })
let today;
let h, m, s, t, time;

let f = ()=>{
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    t = h + ':' + m + ':' + s;
    time = document.getElementsByClassName('time')[0];
    time.innerHTML = t;
}

setInterval(f, 1000);

let btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', function(e) {
    let bulb = document.getElementsByClassName('bulb')[0];
    bulb.classList.toggle('glow');
    if (time.hidden) {
        time.hidden = false;
    } else {
        time.hidden = true;
    }
    // let lap = document.getElementsByClassName('lap')[0];
    // lap.innerHTML = lap.innerHTML + `<div>${t}</div>`
})

// setInterval(function(e) {
//     let bulb = document.getElementsByClassName('bulb')[0];
//     bulb.classList.toggle('glow');
// },1000);



