let hours = document.querySelector(".hour_watch");
let minutes = document.querySelector(".minute_watch");
let seconds = document.querySelector(".second_watch");
function time_refresh() {
    let watch_glob = new Date();
    let watch_hours = watch_glob.getHours() * 30;
    let watch_minute = watch_glob.getMinutes() * 6 ;
    let watch_second = watch_glob.getSeconds() * 6;
  seconds.style.transform = "rotate(" + (watch_second) + "deg)";
  minutes.style.transform = "rotate(" + (watch_minute) + "deg)";
  hours.style.transform = "rotate(" + (watch_hours) + "deg)";
}
setInterval(time_refresh, 1000)
time_refresh()