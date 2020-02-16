const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () =>{
    //pasar el arreglo a un json
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err)=>{
        //esto resume hacer el if
        if (err) throw new Error('no se pudo grabar', err);
            
        
    })
}

//funcion que sirve para crear una nota
const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false

    };

    //agregando el objeto al arreglo de listado
    listadoPorHacer.push(porHacer);
    //luego de guarda en el arreglo pasa a estar guarda en db
    guardarDb();

    return porHacer;
}


module.exports = {
    crear
}