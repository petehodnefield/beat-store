let playerEl = document.querySelector(".player")
let playButtonEl = document.querySelector(".play-button")
let pauseButtonEl = document.querySelector(".pause-button")
let stopButtonEl = document.querySelector(".stop-button")
document.addEventListener("DOMContentLoaded", function() { 
    startplayer(); 
}, false);

var player;

$(".play-button").on("click", function() {
    player.play()
    console.log($(this))
    $(this).addClass("hidden")
    $(this).siblings().removeClass("hidden")

})

$(".pause-button").on("click", function() {
    player.pause()
    $(this).addClass("hidden")
    $(this).siblings().removeClass("hidden")
})

function startplayer() {
    player = document.querySelector('.music-player');
    console.dir(player)
    player.controls = false;
}

// Modal functionality
$(".download-btn").on("click", function() {
    console.log($(this))
    let sibling = $(this).siblings(".modal")
    sibling.removeClass("hidden")
    console.log(sibling)
})

$(".close").on("click", function() {
    $(".modal").addClass("hidden")
})