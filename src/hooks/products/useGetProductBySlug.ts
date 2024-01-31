import { api } from "@/data/api";
import { Product } from "@/data/types/product";

interface GetProductBySlugParams {
  slug: string;
}

interface GetProductBySlugResponse {
  product: Product;
}

export async function useGetProductBySlug({
  slug,
}: GetProductBySlugParams): Promise<GetProductBySlugResponse> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  });

  const product: Product = await response.json();

  return {
    product,
  };
}
