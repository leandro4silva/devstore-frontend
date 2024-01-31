import { api } from "@/data/api";
import { Product } from "@/data/types/product";

interface GetFeaturedProductsReturn {
  products: Product[];
}

export async function useFetchFeaturedProducts(): Promise<GetFeaturedProductsReturn> {
  const response = await api("/products/featured", {
    cache: "no-store",
  });

  const products: Product[] = await response.json();

  return { products };
}
