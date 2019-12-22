window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

AOS.init();

// Form
var form = document.querySelector('.needs-validation');

form.addEventListener('submit', function (event) {
    if (form.checkValidity() ===false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated')
})


// Alert
$(document).ready(function(){
    $("#myName").click(function(){
        alert("The paragraph was clicked.");
    });
});

$(document).ready(function(){
    $("#hide").click(function(){
        $("#gallery_1").hide();
    });
    $("#show").click(function(){
        $("#gallery_1").show();
    });
});
