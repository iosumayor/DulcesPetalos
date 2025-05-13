import type { ProductsDTO } from "../../../core/domain/dto/ProductsDTO";
import type { Product } from "../../../core/domain/models/Products";
import productsData from "./products.get.res.example.json";

export const getProducts = async (): Promise<ProductsDTO> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (productsData.length === 0) {
    throw new Error("No products found");
  }
  return { products: productsData as Product[] };
};

export const getProductById = async (id: number): Promise<Product> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const product = productsData.find((product) => product.id === id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product as Product;
};
