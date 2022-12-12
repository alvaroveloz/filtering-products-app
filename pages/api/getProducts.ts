import { Product } from "../types/Product";

const getProducts = async (): Promise<Product[]> => {
    const response = await fetch('http://api.devtoolstech.in/ecommerce/products');
    const products = await response.json();
    return  products; 

}

export default getProducts