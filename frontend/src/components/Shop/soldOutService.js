// soldOutService.js

import axios from 'axios';
import { server } from '../../server';

// Function to update the "sold out" value in the database based on quantity sold
const updateSoldOut = async (itemId, itemQty) => {
  try {
    // Fetch the product details from the database
    const response = await axios.get(`${server}/product/get-product/${itemId}`);
    const product = response.data.product;

    // Calculate the new "sold out" value
    const soldOut = product.sold_out + itemQty;

    // Update the "sold out" value in the database
    await axios.put(
      `${server}/product/update-product/${itemId}`,
      { sold_out: soldOut },
      { withCredentials: true }
    );

    console.log(`Sold out updated for product ${itemId}. New value: ${soldOut}`);
  } catch (error) {
    console.error(`Error updating sold out for product ${itemId}:`, error);
  }
};

export { updateSoldOut };
