function openInvite(){

document.getElementById("envelope").style.display="none"

}

/* nama tamu */

const params=new URLSearchParams(window.location.search)

const guest=params.get("to")

if(guest){

document.getElementById("guest").innerHTML="Kepada Yth: "+guest

}

/* countdown */

var target=new Date("May 24, 2026 09:00:00").getTime()

setInterval(function(){

var now=new Date().getTime()

var diff=target-now

var d=Math.floor(diff/(1000*60*60*24))
var h=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
var m=Math.floor((diff%(1000*60*60))/(1000*60))
var s=Math.floor((diff%(1000*60))/1000)

document.getElementById("countdown").innerHTML=
d+" Hari "+h+" Jam "+m+" Menit "+s+" Detik"

},1000)

/* scroll animation */

function reveal(){

var reveals=document.querySelectorAll(".reveal")

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight

var elementTop=reveals[i].getBoundingClientRect().top

if(elementTop<windowHeight-100){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll",reveal)

/* guestbook */

function loadGuest(){

let data=localStorage.getItem("guestbook")

if(data){

document.getElementById("list").innerHTML=data

}

}

function kirim(){

let nama=document.getElementById("nama").value
let pesan=document.getElementById("pesan").value

if(nama==""||pesan=="") return

let html="<div><b>"+nama+"</b><br>"+pesan+"<hr></div>"

document.getElementById("list").innerHTML=
html+document.getElementById("list").innerHTML

localStorage.setItem("guestbook",
document.getElementById("list").innerHTML)

}

loadGuest()
