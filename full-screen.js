var elem = document.documentElement;
function openFullscreen() {
if (elem.requestFullscreen) {
elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) { /* Firefox */
elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { /* IE/Edge */
elem.msRequestFullscreen();}
document.getElementById("rahFullScreen53").style.display = "none";
document.getElementById("rahDefeaultScreen53").style.display = "block";}
function closeFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) {
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) {
document.msExitFullscreen();}
document.getElementById("rahFullScreen53").style.display = "block";
document.getElementById("rahDefeaultScreen53").style.display = "none";}
