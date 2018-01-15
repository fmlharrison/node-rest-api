const PRODUCTS_URL = "http://localhost:3000/products";

const fetchProducts = () => {
    return fetch(PRODUCTS_URL)
        .then(res => res.json())
        .then(json => { return json })
        .catch(err => console.error('SERVER REQUEST FAILED: ' + err))
}

export default {
    fetchProducts
}