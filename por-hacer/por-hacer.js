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
        
    } catch (error) {
        //este formato es valido sin no hay nada en json
        listadoPorHacer = [];
    }

}

const getListado = () =>{
    //cargando el metodo cargarDb 
    cargarDb();
    //retornado el arreglo 
    return listadoPorHacer;

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


const actualizar = (descripcion, completado=true) =>{

    cargarDb();

    //for interno
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
       // return tarea.descripcion === descripcion;

       //cualquier numero mayor a 0 significa que encontro algo
       if (index >= 0) {
           // esto va hacer que el elemento encontrado va a hacer igual al elemento que envia el usuario
           //osea si el usuario manda un true esta como true
           listadoPorHacer[index].completado = completado;
           guardarDb();
           return true;
       }else{
           return false;
       }
}

const borrar = (descripcion) => {
    cargarDb();

    //esta va a sacar al elemento de la lista
   let nuevoListado = listadoPorHacer.filter(tarea => {
       return tarea.descripcion !== descripcion
   });

   // si el listdo nuevo es igual al anterio significa que no lo ha borrado
    if (listadoPorHacer.length === nuevoListado.length) {
        //  if(nuevoListado.length === listadoPorHacer.length){
        return false;
    }
    else {

        // la nueva lista va a replazar a la vieja lista
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}