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
