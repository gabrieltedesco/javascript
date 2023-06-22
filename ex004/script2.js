function parimp(n=0) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let resultado = parimp(11)
console.log(resultado)

let v = function(x) {
    return x**2
}
console.log(v(8))
