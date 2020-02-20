const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'

}

const argv = require('yargs')
                    .command('crear', 'crear notas',{
                       descripcion
                    })
                    // este necesita dos comando por eso son dos objectos
                    .command('actualizar','actualizar nota', {
                        descripcion,completado
                    })
                    .command('borrar', 'borrar nota',{
                        descripcion
                    })
                    .help()
                    .argv;

module.exports = {
    argv
} 
