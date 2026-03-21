import axios from "axios";
import { Product } from "../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(
      "https://api.darkglass.com/shopify/products"
    );
    return response.data.data.edges.map((p: any) => {
      const productData = p.node;
      const priceInfo = productData.variants.edges[0].node;
      return {
        id: productData.id,
        name: productData.title,
        price: priceInfo.price,
        sku: priceInfo.sku,
      };
    });
  } catch (error) {
    throw error;
  }
};
