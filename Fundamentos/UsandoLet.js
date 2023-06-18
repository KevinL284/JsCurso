var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//resultados diferentes por estarem em escopos diferentes
//caso substitua o var por let na linha 1 continuará diferente