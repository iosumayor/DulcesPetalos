import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import type { Product } from "../../../../core/domain/models/Products";
import { getProductById } from "../../../../api/fake-server/products/products.server";

export const useProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProductById(Number(id)),
  });
  return { product, isLoading };
};
