import axios from "axios";
import { Product } from "../types/product";

export const fetchProducts = async (searchTerm: string): Promise<Product[]> => {
  try {
    const response = await axios.get(
      "https://api.darkglass.com/shopify/products?all=1"
    );
    const mappedProducts = response.data.data.edges.map((p: any) => {
      const productData = p.node;
      const priceInfo = productData.variants.edges[0].node;
      return {
        id: productData.id,
        name: productData.title,
        price: priceInfo.price,
        sku: priceInfo.sku,
      };
    });
    const filteredProducts = mappedProducts
      .filter((p: Product) => p.price.amount !== "0.0" && p.sku !== null)
      .filter(
        (p: Product) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.sku.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return filteredProducts;
  } catch (error) {
    throw error;
  }
};
