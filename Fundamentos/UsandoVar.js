{
    {
        {
            {var sera = 'Será??'
            console.log(sera) }
        }
    }
}
console.log(sera) //fora da função

function teste(){
    var local = 123 // só visivel dentro da função
    console.log(local)
}

teste()
console.log(local) //fora da função


