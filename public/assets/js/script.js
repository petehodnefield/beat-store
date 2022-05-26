let playerEl = document.querySelector(".player")
const pauseButtonEl = document.querySelector(".pause-btn")
const playButtonEl = document.querySelector("[data-play-button]")
let stopButtonEl = document.querySelector(".stop-button")
const musicPlayer = document.querySelector('.music-selector')
const downloadBtnEl = document.querySelector('.download-btn')
const body = document.querySelector('.body')
const carouselSectionEl = document.querySelector('.carousel-section')

const carouselButtons = document.querySelectorAll("[data-carousel-button]")

const closeIconEl = document.querySelector('close')



playButtonEl.addEventListener('click', () => {
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
    playButtonEl.classList.add('hidden')

    player.play()
    console.log($(this))
    $(this).addClass("hidden")
    $(this).siblings().removeClass("hidden")
}

function pauseAudio() {
    pauseButtonEl.classList.add('hidden')
    playButtonEl.classList.remove('hidden')
    player.pause()
}


function displayModal(packDestination, packName) {
    // create the modal container
    const modalEl = document.createElement('div')
    modalEl.classList.add('modal')
    // Create modal elements
    const modalContentEl = document.createElement('div')
    modalContentEl.classList.add('modal-content')
    // Close icon
    const modalCloseIcon = document.createElement('span')
    modalCloseIcon.classList.add('close')
    modalCloseIcon.innerHTML = '&times'
    // Modal header
    const modalHeaderEl = document.createElement('h3')
    modalHeaderEl.classList.add('modal-text')
    modalHeaderEl.textContent = 'You are agreeing to these rules if you use these loops:'

    // Modal rules Info
    const modalRulesInfo = document.createElement('p')
    modalRulesInfo.textContent = 'You must contact me if you place any of these loops. DM me on Instagram @mongamonga_ or email me @mongamongabeats@gmail.com.'

    // Modal download link
    const modalDownloadLink = document.createElement('a')
    modalDownloadLink.classList.add('download-btn-container')
    modalDownloadLink.textContent = `Download ${packName} Here`
    modalDownloadLink.setAttribute('href', packDestination)


    // Append everything
    modalContentEl.appendChild(modalCloseIcon)
    modalContentEl.appendChild(modalHeaderEl)
    modalContentEl.appendChild(modalRulesInfo)
    modalContentEl.appendChild(modalDownloadLink)
    modalEl.appendChild(modalContentEl)

    carouselSectionEl.appendChild(modalEl)
    // Add hidden to the modal when the close icon is clicked
    modalCloseIcon.addEventListener('click', () => {
        modalEl.classList.add('hidden')
    })
}


function downloadPacks() {
    console.log(this)
    // let sibling = this.siblings(".modal")
    // sibling.removeClass("hidden")
    // console.log(sibling)
}

function obtainModalInfo() {
    const siblings = this.nextElementSibling.children
    let packName;
    let packDestination;
    for(let i= 0; i < siblings.length; i++) {
        let packs = siblings[i]
        let checkForAttribute = packs.hasAttribute("data-active")
        if(checkForAttribute) {
            const classList = siblings[i].childNodes[1].classList[0]
            if(classList === 'discord-weekly-pack') {
                packName = classList
                packDestination = `https://www.dropbox.com/sh/83wumqlotz5yiy3/AABL5DAO-sbjg9k8mjrQwsc7a?dl=0`
            }
            else if(classList === 'gorilla-hero-pack') {
                packName = classList
                packDestination = `https://www.dropbox.com/sh/ihfirqbzhkoz6rr/AABlLh5TSd-6jumD7Le6Dn6sa?dl=0`
            }
            else if(classList === 'beat-img-pack') {
                packName = classList
                packDestination = `https://www.dropbox.com/sh/ino2pomljenf4sh/AADdrBHBBjNzDo7HbtSkPiQJa?dl=0`
            }
            const childInfo = this.children[0]
        }
        else {
        }
    }   
    displayModal(packDestination, packName)
}


pauseButtonEl.addEventListener('click', pauseAudio)
downloadBtnEl.addEventListener('click', obtainModalInfo)

