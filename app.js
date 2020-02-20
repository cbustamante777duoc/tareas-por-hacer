const argv = require('./config/yargs').argv;
const color = require('colors');


const porHacer = require('./por-hacer/por-hacer');


//recoge la primera posicion 
let comando = argv._[0];

switch (comando) {
    case 'crear':
        //tarea guarda lo que retorna la funcion crear
       let tarea =  porHacer.crear(argv.descripcion);
       console.log(tarea);
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

    break;

    case 'listar':
        let listado = porHacer.getListado()
        
        for(let tarea of listado){
            console.log(".-.-.-.-.-.-.-.-.-.-.-".green);
            console.log("descripcion: "+tarea.descripcion.yellow);
            console.log("estado:"+`${tarea.completado}`.yellow);


        }
    break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado)

    break;

    default:
        console.log("comando no reconocido");
    break;
}