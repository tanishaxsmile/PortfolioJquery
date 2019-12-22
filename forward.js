$(function () {

    setTimeout(function() {
        window.location.replace("./index.html");
    }, 6000);

});

jQuery(document).ready(function() {
    var sec = 5

    var timer = setInterval(function() {
        $("#mdtimer span").text(sec--);
        if (sec == 0) {
            $("#mdtimer").hide(1000) .fadeOut(fast);}
    },1000);
});