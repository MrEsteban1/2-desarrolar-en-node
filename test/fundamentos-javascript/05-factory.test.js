const registrarHeroe = require('../../src/fundamentos-javascript/05-factory-functions')

describe('fundamentos-javascript/factory: ',()=>{
    test('Debe devolver una función', ()=>{

        expect(registrarHeroe()).toHaveProperty('ubicacion')
    })
})