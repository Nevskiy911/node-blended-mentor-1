import { readProducts } from '../utils/readProducts.js';

const getAllProducts = async () => {
  try {
    const data = await readProducts();
    return data;
  } catch (error) {
    console.log('Помилка', error.message);
  }
};

console.log(await getAllProducts());
