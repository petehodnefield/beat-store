let playerEl = document.querySelector(".player")
let playButtonEl = document.querySelector(".play-button")
const pauseButtonEl = document.querySelector(".pause-btn")
let stopButtonEl = document.querySelector(".stop-button")
const musicPlayer = document.querySelector('.music-selector')

const carouselButtons = document.querySelectorAll("[data-carousel-button]")
const playButton = document.querySelector("[data-play-button]")



playButton.addEventListener('click', () => {
    let audioClip;
    const activePack = document.querySelector("[data-active]")
    console.log(activePack)
    const yaya = activePack.querySelector('.pack-img')
    if(yaya.classList.contains('gorilla-hero-pack') ){
        audioClip = `./assets/audio/ice.mp3`
        startplayer(audioClip)
    }
    else if(yaya.classList.contains('discord-weekly-pack') ){
        audioClip = `./assets/audio/january.mp3`
        startplayer(audioClip)
    }
    else if(yaya.classList.contains('beat-img-pack') ){
        audioClip = `./assets/audio/world.mp3`
        startplayer(audioClip)
    }
    else{
        console.log(yaya)
    }
})
function startplayer(yaya) {
    player = document.querySelector('.music-player');
    player.setAttribute('src', yaya)
    console.dir(player)
    player.controls = false;
    playAudio()
}

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
        pauseAudio()
    })
})

var player;

function playAudio(yaya) {
    // Remove hidden from the pause button
    pauseButtonEl.classList.remove('hidden')
    playButton.classList.add('hidden')

    player.play()
    console.log($(this))
    $(this).addClass("hidden")
    $(this).siblings().removeClass("hidden")
}

function pauseAudio() {
    pauseButtonEl.classList.add('hidden')
    playButton.classList.remove('hidden')
    player.pause()
}

playButtonEl.addEventListener("click", function(yaya) {
    startplayer(yaya)
    player.play()
    console.log($(this))
    $(this).addClass("hidden")
    $(this).siblings().removeClass("hidden")

})




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

pauseButtonEl.addEventListener('click', pauseAudio)
