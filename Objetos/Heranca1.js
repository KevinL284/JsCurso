const ferrari = {
    modelo: 'F40',
    velMax: 350
}

const volvo = {
    modelo: 'V40',
    velMax: 250
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__===Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObj(){}
    console.log(typeof Object, typeof MeuObj)
    console.log(Object.prototype, MeuObj.prototype) 