const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

let idx = 0

function carrosel(){
    idx++
    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 900}px)`
}

setInterval(carrosel, 1800)

fetch('https://swapi.dev/api/people/4/')
    .then(r =>{return r.json()
})  .then(corpo =>{


    document.getElementById('nome').innerHTML = corpo.name
    document.getElementById('peso').innerHTML = corpo.mass
    document.getElementById('corCabelo').innerHTML = corpo.hair_color
    document.getElementById('corPele').innerHTML = corpo.skin_color
    document.getElementById('corOlho').innerHTML = corpo.eye_color
    document.getElementById('gen').innerHTML = corpo.gender
    document.getElementById('nasc').innerHTML = corpo.birth_year
    
})