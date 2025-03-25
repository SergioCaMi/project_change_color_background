//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

const miBoton = document.querySelector(".btn");
let contador = 0;

// Opción 1

// miBoton.addEventListener("click", event =>{
//     document.querySelector("body").style.backgroundColor = colors[Math.floor(Math.random() * 6)];
// });

// Opción 2
miBoton.addEventListener("click", event =>{
    document.querySelector("body").style.backgroundColor = colors[contador];
    if (contador<5){
        contador++;
    } else {
        contador = 0; 
    }
    console.log(contador);
});
