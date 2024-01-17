let hours=document.getElementById('hours')
let minute=document.getElementById('minute')
let second=document.getElementById('second')

setInterval(()=>{let x=new Date()
    hours.innerText=x.getHours()
    minute.innerText=x.getMinutes()
    second.innerText=x.getSeconds()
    if(x.getSeconds()<10){
        second.innerText=`0${x.getSeconds()}`
    }
    if(x.getMinutes()<10){
        minute.innerText=`0${x.getMinutes()}`
    }
    if(x.getHours()<10){
        hours.innerText=`0${x.getHours()}`
    }
    if(x.getHours()<12){
        am_pm.innerText="AM"
    }else
    am_pm.innerText="PM"
},1000)


