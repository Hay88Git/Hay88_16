function ShowNav() {
    document.getElementById("nav").style.width = "80%";
    document.getElementById("close").style.display = "block";
}
function HideNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("close").style.display = "none";
}
// Change Pic
var newImageSources = [
    "./img/thum0.jpg",
    "./img/thum1.jpg",
    "./img/thum2.jpg",
    "./img/thum3.jpg",
];
var images = document.querySelectorAll(".pic img");
images.forEach(function(img, index) {
    img.src = newImageSources[index];
});

var newAdr = "./img/1.png";
var imgAdr = document.querySelectorAll(".adr img");
imgAdr.forEach(function(img) {
    img.src = newAdr;
});