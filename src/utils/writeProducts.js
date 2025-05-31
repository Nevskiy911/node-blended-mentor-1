import fs from 'fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (products) => {
  try {
    const data = JSON.stringify(products, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані записані');
  } catch (error) {
    console.log(error.message);
  }
};
