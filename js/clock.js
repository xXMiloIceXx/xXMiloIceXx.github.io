setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "Sun"]
    let day = timeNow.getDate();
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let period = " AM";

    if (hoursOfDay > 12) {
        hoursOfDay -= 12;
        period = " PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = " AM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

    document.getElementById('Clock').innerHTML = time + " " + today + " <br>" + day + " " + months + " " + year;

}
displayTime();