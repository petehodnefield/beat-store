
var dummyContainer = document.querySelector("#dummy-container")

let hamburgerMenuEl = document.querySelector(".hamburger")
let navItemsContainerEl = document.querySelector(".nav-links-container")


let showMenuItems = function() {
    if(navItemsContainerEl.style.display === "block") {
        navItemsContainerEl.style.display = "none"
        hamburgerMenuEl.style.transform = 'rotate(180deg)';
        hamburgerMenuEl.style.transition = '.5s';

    }
    else {
        navItemsContainerEl.style.display = "block"
        hamburgerMenuEl.style.transform = 'rotate(90deg)'
        hamburgerMenuEl.style.transition = '.5s';

    }
    navItemsContainerEl.classList.remove("hidden")
    hamburgerMenuEl.classList.add("rotated-hamburger")
}

let hideMenuItems = function() {
    rotatedHamburgerMenuEl.classList.remove("rotated-hamburger")
}

hamburgerMenuEl.addEventListener("click", showMenuItems)
