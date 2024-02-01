import { Product } from "@/data/types/product";
import { getProductBySlug } from "@/services/products";

interface GetProductBySlugParams {
  slug: string;
}

interface GetProductBySlugResponse {
  product: Product | null;
}

export async function useGetProductBySlug({
  slug,
}: GetProductBySlugParams): Promise<GetProductBySlugResponse> {
  const product = await getProductBySlug(slug);

  return { product };
}
