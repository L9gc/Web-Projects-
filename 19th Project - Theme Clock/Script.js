 const hourEL = document.querySelector('.hour')
 const minuteEL= document.querySelector('.minute')
 const secondEL = document.querySelector('.second')
 const dateEL = document.querySelector('.date')
 const timeEL = document.querySelector('.time')
 const toggle = document.querySelector('.toggle')

 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
 })

 function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const hourForClock = hour % 12; //I wanna change the format to 24 hours
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`
    minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEL.innerHTML = `${hour}:${minutes < 10? `0${minutes}`:minutes}:${seconds < 10? `0${seconds}`:seconds}` //add this if you want to make it a 12 hour clock ${ampm}
    dateEL.innerHTML = `${days[day]}, ${months[month]} <span class = "circle">${date}</span> `
}

 const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

 setTime();

 setInterval(setTime, 1000);