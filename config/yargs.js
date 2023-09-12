const argv = require('yargs')
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.options('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.options('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta que número se va a multiplicar'
})
.check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un número'
    }
    return true;
})
.check((argv, options) => {
    if (isNaN(argv.l)) {
        throw 'El listar tiene que ser un booleano'
    }   
    return true;
})
.check((argv, options) => {
    if (isNaN(argv.h)) {
        throw 'El hasta tiene que ser un número'
    }
    return true;
})

.argv

module.exports = argv;