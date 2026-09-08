let date = new Date()
let hour = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()




let dates = document.querySelector("#date")

let hours = document.querySelector("#hours")
hours.innerHTML = hour


let minute = document.querySelector("#minutes")
minute.innerHTML = minutes

let second = document.querySelector("#second")
second.innerHTML = seconds 


 
function updateclock() {
   let date = new Date()
let hour = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
dates.textContent = date.toDateString();
hours.innerHTML = hour    
minute.innerHTML = minutes 
second.innerHTML = seconds 


}
updateclock()

setInterval(updateclock, 1000);







