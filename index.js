const secondHand = document.querySelector('.second');
  const minsHand = document.querySelector('.minute');
  const hourHand = document.querySelector('.hour');
setInterval(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    
    currentHour_rotation = 30 * currentHour + currentMinute / 2; //converting current time
    currentMinute_rotation = 6 * currentMinute;
    currentSecond_rotation = 6 * currentSecond;
    
    hourHand.style.transform = `rotate(${currentHour_rotation}deg)`;
    minsHand.style.transform = `rotate(${currentMinute_rotation}deg)`;
    secondHand.style.transform = `rotate(${currentSecond_rotation}deg)`;
    }, 1000);