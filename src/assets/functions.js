export const obtenElementos = () => {
    const elemento = "Elemento"
    const elementos = []
    for (let i = 0; i < 50000; i++) {
        elementos.push(elemento)
    }
    return elementos
}

