import type { ProductsDTO } from "../../../core/domain/dto/ProductsDTO";
import type { Product } from "../../../core/domain/models/Products";
import productsData from "./products.get.res.example.json";

export const getProducts = async (): Promise<ProductsDTO> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { products: productsData as Product[] };
};

export const getProductById = async (id: number): Promise<Product> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return productsData.find((product) => product.id === id) as Product;
};
