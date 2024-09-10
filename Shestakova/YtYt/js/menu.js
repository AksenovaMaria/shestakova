$(document).ready(function () {
    let burger = $(".burger");
    let wrapperMain = $(".wrapper");
    let closeBtn = $(".close-button");
    let wrapperMenu = $(".wrapper-menu");

    burger.click(() => {
        wrapperMain.css("display", "none");
        wrapperMenu.css("display", "block");
    })

    closeBtn.click(() => {
        wrapperMain.css("display", "block");
        wrapperMenu.css("display", "none");
    })
})