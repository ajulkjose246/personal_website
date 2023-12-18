$(window).on('load', function () {
    $('.loader_bg').fadeToggle();
});
$(document).ready(() => {
const themeMode = localStorage.getItem("themeMode");
if (themeMode === "Dark") {
    document.body.classList.add("dark-theme");
}
$("#darkModeToggle").prop("checked", themeMode === "Dark");
$("#darkModeToggle").change(() => {
    document.body.classList.toggle("dark-theme");
    const isDarkMode = document.body.classList.contains("dark-theme");
    localStorage.setItem("themeMode", isDarkMode ? "Dark" : "Light");
});
});