const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) INVALIDO
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) INVALIDO
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) /* VALIDO */
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')) /* VALIDO|| qualquer atributo dentro do JSON deve estar em ""*/
