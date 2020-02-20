const opciones = {

}


const argv = require('yargs')
                    .command('crear', 'crear notas',{
                       descripcion:{
                            demand:true,
                            alias: 'd',
                            desc:'descripcion de la tarea por hacer'
                       }
                    })
                    // este necesita dos comando por eso son dos objectos
                    .command('actualizar','actualizar nota', {
                        descripcion:{
                            demand:true,
                            alias: 'd',
                            desc:'descripcion de la tarea por hacer'
                       },
                       completado:{
                           default:true,
                           alias:'c',
                           desc:'marca como completada las notas '
                       }
                    })
                    .command('borrar', 'borrar nota',{
                        descripcion:{
                            demand:true,
                            alias: 'd',
                            desc:'descripcion de la tarea por hacer'
                       }
                    })
                    .help()
                    .argv;

module.exports = {
    argv
} 
