var colors=['red','blue', 'green', 'yellow'];
var nextPattern=[];
var userChosenpattern=[];
var level=0;
var started=false;
$(document).on("keypress touchstart", function(){
  if(!started){
    randomSequence();
}
started=true;
});
function randomSequence(){
    userChosenpattern=[];
    var randomNumber= Math.floor(Math.random()*4);
    var randomColor=colors[randomNumber];
    nextPattern.push(randomColor);
    $("."+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
    level++;
    $("#level-title").text("Level "+(level));
}

$(".btn").on("click", function(){
    var chosenColor= $(this).attr("id")
    userChosenpattern.push(chosenColor);
    // console.log(userChosenpattern);
    // console.log(nextPattern);
    playSound(chosenColor);
    animatePress(chosenColor);
    check(userChosenpattern.length-1);
});
function check(level){

if(userChosenpattern[level]===nextPattern[level]){
    console.log("success");
    if(userChosenpattern.length===nextPattern.length)
        {setTimeout(function () {
            randomSequence();
          }, 1000);}
}
else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    restart();
  }

    // console.log("wrong")
}
function restart(){
    started=false;
    level=0;
    nextPattern=[];
}
function playSound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(current){
    $("."+current).addClass('pressed');
    setTimeout(function(){
        $("."+current).removeClass('pressed');
      
}, 100);
}


