function openInvite(){

document.getElementById("envelope").style.display="none"
document.getElementById("content").style.display="block"

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

var day=Math.floor(diff/(1000*60*60*24))

var hour=Math.floor((diff%(1000*60*60*24))/(1000*60*60))

var min=Math.floor((diff%(1000*60*60))/(1000*60))

document.getElementById("countdown").innerHTML=
day+" Hari "+hour+" Jam "+min+" Menit"

},1000)

/* buku tamu */

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

localStorage.setItem("guestbook",document.getElementById("list").innerHTML)

}

loadGuest()
