import { Product } from "@/data/types/product";
import { getFeaturedProducts } from "@/services/products";

interface GetFeaturedProductsReturn {
  products: Product[];
}

export async function useGetFeaturedProducts(): Promise<GetFeaturedProductsReturn> {
  const products = await getFeaturedProducts();

  return { products };
}
