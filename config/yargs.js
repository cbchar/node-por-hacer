const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')

    //comando crear
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })

    //comando actualizar
    .command('actualizar', 'Actualiza una tarea creada', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea ya creada', {
        descripcion,
        borrar: {
            default: true,
            alias: 'b',
            desc: 'Borra las tareas creadas'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}