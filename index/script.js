const card = document.querySelector("#carta")

function iniciar(){
    card.classList.toggle("flip")
}

card.addEventListener("click", (e)=>{
    card.classList.toggle("flip")
})

window.onload = function () {
     iniciar() 
    } 