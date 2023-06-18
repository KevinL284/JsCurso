const valor = 'Global'
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Locas'
    minhaFuncao
}

exec()
