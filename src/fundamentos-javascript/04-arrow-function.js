function funcionNro1(){
    return 'Me estoy ejecutando desde función número 1'
}

const funcionNro2 = function (){
    return 'Me estoy ejecutando desde función número 2'
}

const funcionNro3 = ()=>{
    return 'Me estoy ejecutando desde función número 3'
}

const funcionNro4 = () =>  'Me estoy ejecutando desde función número 3'

const funciones = [funcionNro1, funcionNro2, funcionNro3, funcionNro4]

const ejecutarFunciones = (numero) =>{
    if(numero && (numero >= 0 && numero<3))
        funciones[numero]
    else
        funciones.forEach( funcion => funcion())
}

module.exports = ejecutarFunciones