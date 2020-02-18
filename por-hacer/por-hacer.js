const fs = require('fs');

let listadoPorHacer = [];

//guardar en un archivo json
const guardarDb = () =>{
    //pasar el arreglo a un json
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err)=>{
        //esto resume hacer el if
        if (err) throw new Error('no se pudo grabar', err);
            
        
    })
}

// metodo que carga un listado del json
const cargarDb = () =>{

    try {
            //node lo serializa por nosotro
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorHacer);
    } catch (error) {
        //este formato es valido sin no hay nada en json
        listadoPorHacer = [];
    }
    

   
}



//funcion que sirve para crear una nota
const crear = (descripcion) => {

   cargarDb();

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