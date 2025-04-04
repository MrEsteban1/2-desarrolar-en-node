const { enemigos } = require('../../src/fundamentos-javascript/02-desestructuracion')

describe('fundamentos-javascript/desestructuracion: ',()=>{

    test('Primer personaje es Guason', ()=>{
        expect(enemigos[0]).toBe('Guasón')
    })
})