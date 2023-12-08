// set onscroll function of the window
window.onscroll = function() {
    scrollFunction()
};
 
function scrollFunction() {
    // scrolled for more than 40px, show the scroll back to top button
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}
 
// click on the button and scroll back
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}