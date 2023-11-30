let Lista = ["MOUSE", "APPLE", "HOUSE", "GREEN"];
let intento = 6;
console.log("random", Math.floor(Math.random() * 10) + 1);
let palabra = Lista[2];

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);
console.log(palabra);

function intentar() {
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        console.log("GANASTE!");
        terminar("<h1>¡GANASTE!😀</h1>");
        return;
    }
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (palabra[i] === INTENTO[i]) {
            console.log(INTENTO[i], "verde");
            SPAN.style.backgroundColor = "green";
            SPAN.innerHTML = INTENTO[i];
        } else if (palabra.includes(INTENTO[i])) {
            console.log(INTENTO[i], "amarillo");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {
            console.log(INTENTO[i], "gris");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intento = intento - 1;
    if (intento <= 0) {
        console.log("Perdiste");
        terminar("<h1>¡PERDISTE!😖</h1>");
    }
}

function leerIntento() {
    const VALOR = document.getElementById("guess-input").value.toUpperCase();
    return VALOR;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}