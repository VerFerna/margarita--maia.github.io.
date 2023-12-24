const productos = [
    { id: "1", nombre: "Camisa", stock: 10, precio: 43459, img: "./img/camisadama_1.jpg", idCat: "1" },
    { id: "2", nombre: "Camisa", stock: 8, precio: 43459, img: "./img/camisadama_1_1.jpg", idCat: "1" },
    { id: "3", nombre: "Camisa", stock: 10, precio: 43459, img: "./img/camisadama_1_2.jpg", idCat: "1" },
    { id: "4", nombre: "Camisa", stock: 30, precio: 43459, img: "./img/camisadama_1_3.jpg", idCat: "1" },
    { id: "5", nombre: "Pantalon", stock: 25, precio: 54866, img: "./img/pantalondama_1.jpg", idCat: "2" },
    { id: "6", nombre: "Pantalon", stock: 8, precio: 54866, img: "./img/pantalondama_2.jpg", idCat: "2" },
    { id: "7", nombre: "Pantalon", stock: 10, precio: 54866, img: "./img/pantalondama_3.jpg", idCat: "2" },
    { id: "8", nombre: "Pantalon", stock: 30, precio: 54866, img: "./img/pantalondama_4.jpg", idCat: "2" },
    { id: "9", nombre: "Pantalon", stock: 25, precio: 54866, img: "./img/pantalondama_5.jpg", idCat: "2" },
    { id: "10", nombre: "Pantalon", stock: 8, precio: 54866, img: "./img/pantalondama_6.jpg", idCat: "2" },
    { id: "12", nombre: "Pantalon", stock: 10, precio: 54866, img: "./img/pantalondama_7.jpg", idCat: "2" },
    { id: "13", nombre: "Vestido", stock: 30, precio: 38754, img: "./img/vestidosdama_1.jpg", idCat: "3" },
    { id: "14", nombre: "Vestido", stock: 25, precio: 38754, img: "./img/vestidosdama_2.jpg", idCat: "3" },
    { id: "15", nombre: "Vestido", stock: 0, precio: 38754, img: "./img/vestidosdama_3.jpg", idCat: "3" },
    { id: "16", nombre: "Vestido", stock: 10, precio: 38754, img: "./img/vestidosdama_4.jpg", idCat: "3" },
    { id: "18", nombre: "Cartera", stock: 30, precio: 28997, img: "./img/otrosdama_1.jpg", idCat: "4" },
    { id: "19", nombre: "Cartera", stock: 25, precio: 28997, img: "./img/otrosdama_2.jpg", idCat: "4" },
    { id: "20", nombre: "Collar", stock: 8, precio: 28997, img: "./img/otrosdama_3.jpg", idCat: "4" },
    { id: "21", nombre: "Gorro", stock: 10, precio: 28997, img: "./img/otrosdama_4.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}



