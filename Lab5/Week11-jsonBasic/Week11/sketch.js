var data;
var index = 0;
function preload(){
    data = loadJSON('data.json');
}


function setup(){
    createCanvas(600, 300);
    console.log(data);
}

function draw(){
    background('pink');
    text(data.coffee[index],20,20);
    index++;
    index = index % data.coffee.length;
}

