canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

marsArray = ["Mars 1.jpg" , "Mars 2.jpg" , "Mars 3.jpg" , "Mars.jpg"];
randomNumber = Math.floor(Math.random()*4);
rover_width = 100; 
rover_height = 90;
background_image = marsArray[randomNumber];
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;
    
    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log (keypressed);
    if(keypressed == '38'){
        up();
        console.log(up);
    }
    if(keypressed == '40'){
        down();
        console.log(down);
    }

if(keypressed == '37'){
    left();
    console.log(left);
}

if(keypressed == '39'){
    right();
    console.log(right);
}
}

function up(){

    if(rover_y >= 0){

        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);

    uploadbackground();
    uploadrover();
    }
}

function down(){

    if(rover_y <= 500){

        rover_y = rover_y + 10;
        console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);

    uploadbackground();
    uploadrover();
    }
}

function left(){

    if(rover_x >= 0){

        rover_x = rover_x - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);

    uploadbackground();
    uploadrover();
    }
}

function right(){

    if(rover_x <= 700){

        rover_x = rover_x + 10;
        console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);

    uploadbackground();
    uploadrover();
    }
}