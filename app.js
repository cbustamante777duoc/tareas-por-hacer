const argv = require('yargs').argv;

console.log(argv);
//recoge la primera posicion 
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("crear nota");
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