const fs = require('fs');

let listadoPorHacer = [];

//funcion que sirve para crear una nota
const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false

    };

    //agregando el objeto al arreglo de listado
    listadoPorHacer.push(porHacer)

    return porHacer;
}


module.exports = {
    crear
}