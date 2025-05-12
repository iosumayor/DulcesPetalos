import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../../api/fake-server/products/products.server";
import type { ProductsDTO } from "../../../../core/domain/dto/ProductsDTO";
import { useState } from "react";

export const useHome = () => {
  const [search, setSearch] = useState("");
  const { data: dataProducts, isLoading } = useQuery<ProductsDTO>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  const filteredProducts = dataProducts?.products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  return { dataProducts, isLoading, filteredProducts, search, setSearch };
};
