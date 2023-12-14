// set onscroll function of the current window
window.onscroll = function() {
    scrollFunction()
};
 
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        // scrolled for more than 40px, show the scroll back to top button
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        // otherwise: hide button
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}
 
// click on the button and scroll back
function topFunction() {
    // by reset the scrollTop value
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function contactAlert() {
    alert("Minhua L"+"\n"+"luiminyan@gmail.com");
}
