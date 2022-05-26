let playerEl = document.querySelector(".player")
let playButtonEl = document.querySelector(".play-button")
let pauseButtonEl = document.querySelector(".pause-button")
let stopButtonEl = document.querySelector(".stop-button")

const carouselButtons = document.querySelectorAll("[data-carousel-button]")

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const packs = button
        .closest("[data-carousel]")
        .querySelector("[data-packs]")

        const activePack = packs.querySelector("[data-active]")
        let newIndex = [...packs.children].indexOf(activePack) + offset
        if(newIndex < 0) newIndex = packs.children.length - 1
        if(newIndex >= packs.children.length) newIndex = 0

        packs.children[newIndex].dataset.active = true
        delete activePack.dataset.active
    })
})
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