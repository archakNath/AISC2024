
var intervalId = setInterval(function () {
    const today = new Date();
    const dday = new Date(2024, 7, 11);

    const one_min = 60;
    const one_hrs = 60 * 60;
    const one_day = 60 * 60 * 24;

    var diff = (dday.getTime() - today.getTime()) / 1000;
    var day = Math.ceil(diff / one_day);
    var hrs = Math.ceil((diff - (day * one_day)) / one_hrs);
    var min = Math.ceil((diff - (day * one_day) - (hrs * one_hrs)) / one_min);
    var sec = Math.ceil(diff - (day * one_day) - (hrs * one_hrs) - (min * one_min));

    const day_left = document.getElementById("day_left");
    const hrs_left = document.getElementById("hrs_left");
    const min_left = document.getElementById("min_left");
    const sec_left = document.getElementById("sec_left");

    day_left.innerText = day;
    hrs_left.innerText = hrs + 24;
    min_left.innerText = min + 60;
    sec_left.innerText = sec + 60;
}, 1000);