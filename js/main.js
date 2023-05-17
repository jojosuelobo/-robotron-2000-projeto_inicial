const subtrair = document.querySelector("#subtrair") 
const somar = document.querySelector("#somar") 

const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})
//somar.addEventListener("click", () => { manipulaDados("+") })
//subtrair.addEventListener("click", () => { manipulaDados("-") })
function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]") 

    if(operacao == "-") { 
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1    
    }
}














const robotron = document.querySelector("#robotron") 

function dizOiRobotron()
{
    console.log("Robotron disse OI");
}

// Em forma de função anônima
robotron.addEventListener("click", function(){
    console.log("Robotron disse OI anônimamente")
});

// Em forma de ARROW FUNCTION
robotron.addEventListener("click", () => {
    //console.log(x);
    console.log("Robotron disse OI em Arrow Function")
});

// Em forma de Evento
robotron.addEventListener("click", x => {
    console.log(x);
});

// Em forma de função
robotron.addEventListener("click", dizOiRobotron());
