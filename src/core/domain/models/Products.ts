export interface Product {
  id: number;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: "nitrogen" | "phosphorus";
  heightInCm: number;
}

export const getFormattedPrice = (product: Product): string => {
  return `${product.price.toFixed(2)}€`;
};

export const getFormattedHeight = (product: Product): string => {
  return `${product.heightInCm} cm`;
};
