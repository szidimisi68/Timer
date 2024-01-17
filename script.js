let megy = false
let fok = 0
let mp = 0
let time = 120
let timer = 120
let ora = ""
let perc = ""
let masodperc = ""
let idozito = false
let interval = setInterval(Forgas, 1000);
interval.Start

function Start(){
    if (!megy) {
        document.getElementById("icon").style.backgroundImage = "url(stop.png)"
        megy = true
        idozito = true
    }
    else{
        document.getElementById("icon").style.backgroundImage = "url(start.png)"
        megy = false
        idozito = false
    }
}

function Forgas(){
    if(idozito){
        Idoallitas()
        console.log("lefut")
        mp += 1
        fok = mp * 360 / time
        console.log(fok)
        document.getElementById("kor").style.rotate = fok + "deg"
        timer -= 1
        ora = Math.floor(timer / 3600)
        perc = Math.floor((timer - ora * 3600)/60) 
        if (perc < 10) {
            perc = "0" + perc
        }
        masodperc = timer - perc * 60 - ora * 3600
        if (masodperc < 10) {
            masodperc = "0" + masodperc
        }
        document.getElementById("time").innerText = ora + ":" + perc + ":" + masodperc
        if (timer == 0) {
            idozito = false
            alert("lejárt az idő!")
            Start()
        }
    }
}

function Beallit(){
    bevitelOra = document.getElementById("ora").value
    bevitelPerc = document.getElementById("perc").value
    bevitelMasodperc = document.getElementById("masodperc").value
    if (bevitelOra != "" || bevitelPerc != "" || bevitelMasodperc != "") {
         
        time = bevitelOra * 3600 + bevitelPerc * 60 + bevitelMasodperc * 1
        timer = time 
        document.getElementById("ora").value = ""
        document.getElementById("perc").value = ""
        document.getElementById("masodperc").value = ""
        Idoallitas()
    }
    mp = 0
    document.getElementById("kor").style.rotate = mp + "deg"
}

function Idoallitas(){
    ora = Math.floor(timer / 3600)
    perc = Math.floor((timer - ora * 3600)/60)
    if (perc < 10) {
        perc = "0" + perc
    }
    masodperc = timer - perc * 60 - ora * 3600
    if (masodperc < 10) {
        masodperc = "0" + masodperc
    }
    document.getElementById("time").innerText = ora + ":" + perc + ":" + masodperc
}