//import axios from 'axios';

const FakeStoreApi = {
    fetchAllProducts: async()=>{
        const res = await fetch('https://fakestoreapi.com/products');
        const result = res.jason();
        return result;
    },
    fetchProductById: async(productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const result = await res.jason()
        return result;
    },
    fetchProductsBySearchQuery: async(query) => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = await res.jason()
        return result.filter((product)=> product.title.toLowerCase().includes(query));
    },
}

export { FakeStoreApi }