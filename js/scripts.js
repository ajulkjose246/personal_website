$(window).on('load', function () {
        $('.loader_bg').fadeToggle();
});
$(document).ready(() => {
    // const themeMode = document.cookie.split("; ").find(row => row.startsWith("themeMode="))?.split("=")[1];
    const themeMode = localStorage.getItem("themeMode");
    // console.log(themeMode)
    $(".theme").remove()
    if (themeMode == "Dark") {
        document.body.classList.toggle("dark-theme");
        $(".theme").remove()
        $(".modeChange").append("<li class='theme nav-item'><a class='nav-link'><i class='bi bi-brightness-high-fill icon'></i><span class='text nav-text'>Light Mode</span></a></li>");
        // document.cookie = "themeMode=Dark";
        localStorage.setItem("themeMode", "Dark");

    } else {
        $(".theme").remove()
        $(".modeChange").append("<li class='theme nav-item'><a class='nav-link'><i class='bi bi-moon-fill icon'></i><span class='text nav-text'>Dark Mode</span></a></li>")
        // document.cookie = "themeMode=Light";
        localStorage.setItem("themeMode", "Light");
    }
    $(".modeChange").click(() => {
        document.body.classList.toggle("dark-theme");
        if ($('body').hasClass('dark-theme')) {
            $(".theme").remove()
            $(".modeChange").append("<li class='theme nav-item'><a class='nav-link'><i class='bi bi-brightness-high-fill icon'></i><span class='text nav-text'>Light Mode</span></a></li>");
            // document.cookie = "themeMode=Dark";
            localStorage.setItem("themeMode", "Dark");
        } else {
            $(".theme").remove()
            $(".modeChange").append("<li class='theme nav-item'><a class='nav-link'><i class='bi bi-moon-fill icon'></i><span class='text nav-text'>Dark Mode</span></a></li>")
            // document.cookie = "themeMode=Light";
            localStorage.setItem("themeMode", "Light");
        }

    })
})