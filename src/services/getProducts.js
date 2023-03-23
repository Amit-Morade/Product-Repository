export async function getAllProducts(){
    const response = await fetch('https://dummyjson.com/products')
    const products = await response.json();
    console.log(products.products)
    return products.products;
}
