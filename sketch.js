var form1,form2,form3, user,game;
var gameState=0;
var database;
var userCount;
var userIndex


function setup() {
    canvas = createCanvas(displayWidth-36,displayHeight-20);
    database=firebase.database();

    user=new User();
    user.getUserCount();
   
    game=new Game();
    game.getState();
    game.start();
 
}
function draw() {
   
    console.log(mouseX,mouseY);
    
    if(gameState===0){
        background(245,36,146);
    }
    if(gameState===1){
        background(247,140,153);
    }
    if(gameState===2){
        background(96,247,242);
    }
    if(gameState===3){
        background(104,40,248);
    }
    if(gameState===4){
        background(204,155,247);
    }
    if(gameState===5){
        background(248,95,3);
    }
    if(gameState===6){
        background(244,109,87);
    }
    if(gameState===7){
        background(218,169,203);
    }
    if(gameState===8){
        background(229,147,204);
    }
    if(gameState===9){
        background(209,102,208);
    }
    if(gameState===10){
        background(99,248,99);
    }
    if(gameState===11){
        background(248,248,0);
    }
    if(gameState===12){
        background(0,0,248);
    }


}