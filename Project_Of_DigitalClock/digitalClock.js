const boxTag =document.querySelector(".box");

const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

const run=()=>{

    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let d = time.getDate();
    let mm = time.getMonth();
    let y = time.getFullYear();
    let wd = time.getDay();

    if(h>12){
        h -=12;
    }

    if(h<10){
        h="0"+h;
    }

    if(m<10){
        m="0"+m;
    }

    if(s<10){
        s="0"+s;
    }

    if(d<10){
        d="0"+d;
    }

    let nameM=months[mm];
    let nameWD=days[wd];

const timeTag=`${h}:${m}:${s}`

const dateTag=`${d} / ${nameM} / ${y} / ${nameWD}`

boxTag.innerHTML=timeTag+"</br><span>"+dateTag+"</span>"
//console.log(d,nameM,y,nameWD)
};
setInterval(run, 1000)