import { readProducts } from '../utils/readProducts.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { writeProducts } from '../utils/writeProducts.js';

const addOneProduct = async () => {
  try {
    const products = await readProducts();
    const newProduct = createFakeProduct();
    products.push(newProduct);
    await writeProducts(products);
  } catch (error) {
    console.error('Error', error.message);
  }
};

addOneProduct();
