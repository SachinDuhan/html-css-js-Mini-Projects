let form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function(e){
    e.preventDefault();



    const selectedOption = document.querySelector("input[name='strength']:checked").value;

    // Generating password
    let alphaLower = 'abcdefghijklmnopqrstuvwxyz';
    let alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let dig = '1234567890';
    let special = '!@#$%^&*()_+';

    let passLen = '';

    while (passLen.length < 16) {
        if (selectedOption == 'simple'){
            let liNum = Math.floor(Math.random()*2)
            if (liNum == 0) {
                let passChar = alphaLower[Math.floor(Math.random()*alphaLower.length)];
                passLen += passChar;
            } else {
                let passChar = alphaUpper[Math.floor(Math.random()*alphaUpper.length)];
                passLen += passChar;
            }
        } else if (selectedOption == 'moderate') {
            let liNum = Math.floor(Math.random()*3);
            if (liNum == 0) {
                let passChar = alphaLower[Math.floor(Math.random()*alphaLower.length)];
                passLen += passChar;
            } else if (liNum == 1) {
                let passChar = alphaUpper[Math.floor(Math.random()*alphaUpper.length)];
                passLen += passChar;
            } else {
                let passChar = dig[Math.floor(Math.random()*dig.length)];
                passLen += passChar;
            }
        } else {
            let liNum = Math.floor(Math.random()*4);
            if (liNum == 0) {
                let passChar = alphaLower[Math.floor(Math.random()*alphaLower.length)];
                passLen += passChar;
            } else if (liNum == 1) {
                let passChar = alphaUpper[Math.floor(Math.random()*alphaUpper.length)];
                passLen += passChar;
            } else if (liNum == 2) {
                let passChar = dig[Math.floor(Math.random()*dig.length)];
                passLen += passChar;
            } else {
                let passChar = special[Math.floor(Math.random()*special.length)];
                passLen += passChar
            }
        }
    }

    let passContainer = document.getElementsByClassName('pass')[0];
    passContainer.classList.remove('placeholder');
    passContainer.textContent = passLen;
})
