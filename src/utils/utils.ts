import { Product } from "../features/productSlice";

export const calculateTotalOfProducts = (products: Product[]) => {

    // This tells typescript that total is always a number
    // let total: number = 0;
    let total: number = 0;
    products.forEach((product) => {
        total += product.price;
    })
    return total.toFixed(2);
}

export const reverseUppercaseString = (inputString: string) => {
    return inputString.split('').reverse().join('').toUpperCase();
}