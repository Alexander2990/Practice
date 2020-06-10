var display = document.getElementById('display');
var btnUp = document.getElementById('Up');
var btnDown = document.getElementById('Down');
var btnClear = document.getElementById('Clear');

var count = 0;
var countClickBtnUp = 0;
var countClickBtnDown = 0;
var countClickBtnClear = 0;

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
