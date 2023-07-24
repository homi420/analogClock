//Creating the setInterval function to repeatedly rotate the hands of the clock
setInterval(() => {
    let d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    hRotate = 30 * hTime + mTime / 2;
    mRotate = 6 * mTime + sTime / 10;
    sRotate = 6 * sTime;
    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mRotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;
}, 1000)
