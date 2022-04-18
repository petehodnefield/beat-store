let playerEl = document.querySelector(".player")
let playButtonEl = document.querySelector(".play-button")
let pauseButtonEl = document.querySelector(".pause-button")
let stopButtonEl = document.querySelector(".stop-button")

document.addEventListener("DOMContentLoaded", function() { 
    startplayer(); 
}, false);

var player;

function startplayer() 
{
 player = document.querySelector('.music-player');
 console.dir(player)
 player.controls = false;
}

function playAudio() 
{
 player.play();
} 
function pauseAudio() 
{
 player.pause();
}
function stopAudio() 
{
 player.pause();
 player.currentTime = 0;
}

