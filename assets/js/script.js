var iceMountain = document.querySelector("#ice-mountain-audio");
var january = document.querySelector("#january-audio");
var buyBtn = document.querySelector(".buy-btn")
var dummyContainer = document.querySelector("#dummy-container")

let hamburgerMenuEl = document.querySelector(".hamburger")
let rotatedHamburgerMenuEl = document.querySelector(".rotated-hamburger")
let navItemsContainerEl = document.querySelector(".nav-links-container")

function playIceMountain() {
    iceMountain.play();
}
function playJanuary() {
    january.play();
}

let showMenuItems = function() {
    console.log(navItemsContainerEl)
    navItemsContainerEl.classList.remove("hidden")
    hamburgerMenuEl.classList.add("rotated-hamburger")
}

let hideMenuItems = function() {
    rotatedHamburgerMenuEl.classList.remove("rotated-hamburger")
}

hamburgerMenuEl.addEventListener("click", showMenuItems)
rotatedHamburgerMenuEl.addEventListener("click", hideMenuItems)