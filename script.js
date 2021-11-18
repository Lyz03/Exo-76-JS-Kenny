let t = parseInt(document.getElementById('kenny').style.top);
let l = parseInt(document.getElementById('kenny').style.left);
let kenny = document.getElementById('kenny');

// up
document.getElementById('up').addEventListener('click',function() {
    if (t === 0){
        kenny.style.top = '0px';
    }
    else {
        t = t - 10;
        kenny.style.top = t + 'px';
    }
});


//down
document.getElementById('down').addEventListener('click',function() {
    if (t === 470) {
        kenny.style.top = '470px';
    }
    else {
        t = t + 10;
        kenny.style.top = t + 'px';
    }
});


//left
document.getElementById('left').addEventListener('click',function() {
    if (l === 60) {
        alert('Kenny est mort');
        kenny.style.left = '200px';
        kenny.style.top = '200px';
    }
    if (l === 0) {
        kenny.style.left = '0px';
    }
    else {
        l = l - 10;
        kenny.style.left = l + 'px';
    }
});


//right
document.getElementById('right').addEventListener('click',function() {
    if (l === 470) {
        kenny.style.left = '470px';
    }
    else {
        l = l + 10;
        kenny.style.left = l + 'px';
    }
});


let viewport = document.getElementById('viewport');

