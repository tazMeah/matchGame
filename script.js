"use strict";

$(document).ready(() => {






    const timeleft = 15;
    const downloadTimer = setInterval(function() {
        timeleft--;
        document.getElementById("countdownTimer").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(downloadTimer);
    }, 1000);



});