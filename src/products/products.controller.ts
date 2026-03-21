import { Request, Response } from "express";
import { fetchProducts } from "./products.services";
import { Product } from "../types/product";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = (req.query.search as string) || "";
    const data: Product[] = await fetchProducts(searchTerm);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
