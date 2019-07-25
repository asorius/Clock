var timeShow = function () {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    //checks values form newdate which are either single or double digits and transforms the value into array of strings. if value is a single digit, stringify it and add 0 in front,else stringify and create array
    var prezeroedHours = hours.toString().split('').length < 2
        ? ("0" + hours.toString()).split('')
        : hours.toString().split('');
    var prezeroadMinutes = minutes.toString().split('').length < 2
        ? ("0" + minutes.toString()).split('')
        : minutes.toString().split('');
    var prezeroadSeconds = seconds.toString().split('').length < 2
        ? ("0" + seconds.toString()).split('')
        : seconds.toString().split('');
    //2d array of time transformed into strings.[['hours','hours'],['minutes','minutes'],['seconds','seconds']]
    var timeArray = prezeroedHours.concat(prezeroadMinutes, prezeroadSeconds);
    //selects correspondng html elements by its custom data-value attribute to data from time array
    var firstHour = document.querySelector(".hours .firstly div[data-value='" + timeArray[0] + "']");
    var secondHour = document.querySelector(".hours .secondly div[data-value='" + timeArray[1] + "']");
    var firstMinute = document.querySelector(".minutes .firstly div[data-value='" + timeArray[2] + "']");
    var secondMinute = document.querySelector(".minutes .secondly div[data-value='" + timeArray[3] + "']");
    var firstSecond = document.querySelector(".seconds .firstly div[data-value='" + timeArray[4] + "']");
    var secondSecond = document.querySelector(".seconds .secondly div[data-value='" + timeArray[5] + "']");
    ///HOURS HACKROUND
    if (document.querySelectorAll(".hours .active").length < 1) {
        //intial checking and setting active hours
        firstHour.classList.add('active');
        secondHour.classList.add('active');
    }
    else {
        //every second the interval is ticking, remove first hour digits active class from old value
        document
            .querySelector(".hours .firstly .active")
            .classList.remove('active');
        //add active class on new value
        firstHour.classList.add('active');
        //same actions for second hour digit
        document
            .querySelector(".hours .secondly .active")
            .classList.remove('active');
        secondHour.classList.add('active');
    }
    ///MINUTES HACKROUND
    //same routine as above
    if (document.querySelectorAll(".minutes .active").length < 1) {
        firstMinute.classList.add('active');
        secondMinute.classList.add('active');
    }
    else {
        document
            .querySelector(".minutes .firstly .active")
            .classList.remove('active');
        firstMinute.classList.add('active');
        document
            .querySelector(".minutes .secondly .active")
            .classList.remove('active');
        secondMinute.classList.add('active');
    }
    ///SECONDS HACK AROUND
    //same routine as above
    if (document.querySelectorAll(".seconds .active").length < 1) {
        firstSecond.classList.add('active');
        secondSecond.classList.add('active');
    }
    else {
        document
            .querySelector(".seconds .firstly .active")
            .classList.remove('active');
        firstSecond.classList.add('active');
        document
            .querySelector(".seconds .secondly .active")
            .classList.remove('active');
        secondSecond.classList.add('active');
    }
    document.querySelectorAll('.active').forEach(function (el) {
        //get all current elements with active classes
        //get their parents
        var parent = el.parentElement;
        //get element middle point based on its own
        var elmid = el.getBoundingClientRect().height / 2;
        //get window middle point
        var windowmiddle = window.innerHeight / 2;
        //reset parent elements top coordinate to match winodw middle  so 0s and all parent elements are aligned in the middle
        parent.style.top = windowmiddle + "px";
        //get distance from top of window to elements middle point
        var elementTotalOffsetFromWindowTop = el.offsetTop + el.parentElement.offsetTop + elmid;
        //move elements parent down by the distance it would have been located away from the middle of the screen
        parent.style.transform = "translateY(-" + (elementTotalOffsetFromWindowTop -
            windowmiddle) + "px)";
    });
    document.querySelectorAll('.colon').forEach(function (el) { });
};
timeShow();
window.setInterval(timeShow, 1000);
