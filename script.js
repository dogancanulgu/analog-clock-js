function showClock() {
    const degree60 = 6;
    const degree12 = 30;
    const time = new Date();

    var second = time.getSeconds() * degree60;
    var minute = time.getMinutes() * degree60;
    var hour = time.getHours() * degree12 + (minute/12);

    document.querySelector(".second-hand").style.transform = 'rotate('+second+'deg)';
    document.querySelector(".minute-hand").style.transform = 'rotate('+minute+'deg)';
    document.querySelector(".hour-hand").style.transform = 'rotate('+hour+'deg)';
}

showClock();
setInterval(showClock, 1000);