// setTimeout ejecuta una funcion pasado cierto tiempo
let contador = 1;

function saludar(){
    document.write('<p>Hola mundo</p>');
    if(contador === 5){
        clearInterval(identificador);
    }
    contador++;
}

// window.setTimeout(saludar,3000);

// setTimeout(saludar, 3000);

// setTimeout(()=>{
//     document.write('<p>Hola mundo</p>');
// }, 4000);

// setInterval ejecuta una funcion cada cierto tiempo

// let identificador = setInterval(saludar, 2000);

//ACLARACION EJERCICIO DEL RELOJ

let fechaActual = new Date();
console.log(fechaActual)
console.log(fechaActual.getDate())
console.log(fechaActual.getDay())
console.log(fechaActual.getHours())
console.log(fechaActual.getMinutes())
console.log(fechaActual.getSeconds())
console.log(fechaActual.getMonth())