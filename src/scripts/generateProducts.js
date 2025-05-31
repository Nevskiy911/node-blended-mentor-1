import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  try {
    const allProducts = await readProducts();

    for (let i = 0; i < number; i++) {
      const product = createFakeProduct();
      allProducts.push(product);
    }
    await writeProducts(allProducts);
    console.log(`Успішно додано продуктів: ${number} `);
  } catch (error) {
    console.error(error.message);
  }
};

generateProducts(4);
