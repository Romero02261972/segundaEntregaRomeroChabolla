const products = [
{id: "1", name: "bugambilia", description: "flor rosa", stock: 15},
{id: "2", name: "rosa", description: "flor roja", stock: 20},
{id: "3", name: "lili", description: "flor blanca", stock: 50},
{id: "4", name: "girasol", description: "flor amarilla", stock: 30},
{id: "5", name: "orquidea", description: "flor morada", stock: 5},

];
export const getProducts = () => {
    return new Promise ( (resolve, reject) =>{
        if(products.length > 0){
            resolve(products)
        } else {
            reject("No hay productos")
        }
    })
}