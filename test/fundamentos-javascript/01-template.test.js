 const template_string = require('../../src/fundamentos-javascript/01-template-string')

describe('fundamentos-javascript/template-string: ',()=>{

    test('String contiene "Hello"',()=>{
        //toContain(<string>) ----> Validar que contenga el valor
        expect(template_string).toContain('Hello')
    })
})