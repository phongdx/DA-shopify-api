import { Request, Response } from "express";
import { fetchProducts } from "./products.services";
import { Product } from "../types/product";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const data: Product[] = await fetchProducts();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
