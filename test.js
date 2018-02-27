window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById('showScroll').innerHTML = scrolled + 'px';
    e1.style.display = "none";
    e2.style.display = "block";
    if (scrolled == 0) { e1.style.display = "block";
                         e2.style.display = "none";
        
    }
    if (scrolled != 0) {e3.style.display = "block";
}else{e3.style.display = "none"}
}
function up() { window.scrollTo(0, 0)}