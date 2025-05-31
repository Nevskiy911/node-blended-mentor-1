import { readProducts } from '../utils/readProducts.js';

const countProducts = async () => {
  try {
    const count = (await readProducts()).length;
    return count;
  } catch (error) {
    console.log('помилка', error.message);
  }
};

console.log(await countProducts());
