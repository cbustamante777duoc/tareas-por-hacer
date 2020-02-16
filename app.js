const argv = require('./config/yargs').argv;

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
        console.log("actualizar nota");
    break;

    case 'listar':
        console.log("listar nota");
    break;

    default:
        console.log("comando no reconocido");
    break;
}