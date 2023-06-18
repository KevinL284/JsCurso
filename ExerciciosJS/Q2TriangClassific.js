//Triângulos
//&&= and || - or

function ClassificarTriangulo(l1, l2, l3){
    if(l1 == l2 && l2 == l3){
    return 'Equilátero'
    }else if(l1 == l2 || l2 == l3 || l3 == l1){
        return 'Isóseles'
    }else{
        return 'Escaleno'
    }
}
console.log(ClassificarTriangulo(2, 2, 2))
console.log(ClassificarTriangulo(2, 2, 4))
console.log(ClassificarTriangulo(2, 6, 4))