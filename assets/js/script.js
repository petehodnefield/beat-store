function myFunction() {
    var x = document.getElementById("myLinks")
    if(x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block"
    }
}

var beatImgEl = document.querySelector(".beat-img");
var beatImgElTwo = document.querySelector(".beat-img-two");


var alertMe = function() {
    window.alert("Hello World");
}

beatImgElTwo.addEventListener("mouseover", alertMe)