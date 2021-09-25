// ANIMATIONS

// Adjust Navbar Styling on Scroll
$(document).on("scroll", () => {
    if ($(document).scrollTop() > 0) {
        $(".navbar").addClass("navbar-scrolled");
    } else {
        $(".navbar").removeClass("navbar-scrolled");
    }
})


// Loader
window.onload = (event) => {
    $(".page-loader").fadeOut(1000);
    $(".page").fadeIn(1000);
    if (window.location.pathname === "/contact.html") {
        $(".snazzy-map").html(`<iframe src="https://snazzymaps.com/embed/234570" style="border:none;"></iframe>`);
    }
};

// Navbar

$(".mobile-nav-toggler").click(function () {
    $(".mobile-nav").addClass("mobile-nav-open");
    $("html").css("overflow-y", "hidden")
})

$(".mobile-nav-close").click(function () {
    $(".mobile-nav").removeClass("mobile-nav-open");
    $("html").css("overflow-y", "scroll")
})