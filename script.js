let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let divDATE = document.querySelector("#date")
let divtime = document.querySelector("#time")


setInterval(()=>{
  console.log("saimjjj")
  date = new Date();
   htime = date.getHours();
   mtime = date.getMinutes();
   stime = date.getSeconds();
   hrotate =  30*htime + mtime/2
   mrotate= 6*mtime;
   srotate = 6*stime;
    dates = date.toLocaleDateString();
    time = date.toLocaleTimeString();
  hour.style.transform = `rotate(${hrotate}deg)`;
  minute.style.transform = `rotate(${mrotate}deg)`;
  second.style.transform = `rotate(${srotate}deg)`;
  divDATE.innerHTML = `${dates}`;
  divtime.innerHTML =`${time}`;
},1000);

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
      document.body.style.backgroundColor = 'lightcoral';
  } else {
      document.body.style.backgroundColor = 'lightblue';
  }
});