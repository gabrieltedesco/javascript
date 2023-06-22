function tabuada() {
    let valor = Number(document.getElementById('inum').value)
    let tabuada = document.getElementById('itab')
    if (valor.lenght == 0) {
        window.alert('Digite um valor válido')
    } else {
    let c = 1
        tabuada.innerHTML = '' /*limpando a área de tabuada*/
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${valor} x ${c} = ${valor*c}`
            item.value = `tabuada${c}` /*uso em php*/
            tabuada.appendChild(item)
            c++
        }
    }

}

