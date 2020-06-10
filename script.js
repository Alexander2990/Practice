let display = document.getElementById('display');
let btnUp = document.getElementById('Up');
let btnDown = document.getElementById('Down');
let btnClear = document.getElementById('Clear');

let count = 0;
let countClickBtnUp = 0;
let countClickBtnDown = 0;
let countClickBtnClear = 0;

btnUp.addEventListener('click', function () {
    count += 1; 
    display.innerText = count;

    countClickBtnUp += 1;

    console.clear();
    console.log('Click to Up: ' + countClickBtnUp);
})

btnDown.addEventListener('click', function(){
    count -=1;
    display.innerText = count;

    countClickBtnDown += 1;

    console.clear();
    console.log('Click to Down: ' + countClickBtnDown);
})

btnClear.addEventListener('click', function(){
    count = 0;
    display.innerText = count;

    countClickBtnClear += 1;

    console.clear();
    console.log('Click to Clear: ' + countClickBtnClear);
})
