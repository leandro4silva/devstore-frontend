import { Alert } from "@/data/core/alert";
import { Product } from "@/data/types/product";
import { BadRequest } from "@/services/errors/bad-request-error";
import { GetProductBySlugService } from "@/services/products/get-product-by-slug";

interface GetProductBySlugParams {
  slug: string;
}

interface GetProductBySlugResponse {
  product: Product | null;
  error: Alert | null;
}

export async function useGetProductBySlug({
  slug,
}: GetProductBySlugParams): Promise<GetProductBySlugResponse> {
  const getProductsFeaturedService = new GetProductBySlugService();

  const result = await getProductsFeaturedService.handle(slug);

  if (result.isLeft()) {
    const error = result.value;
    const alert = new Alert("Internal Server Error", 500);

    // mostra alerta
    switch (error.constructor) {
      case BadRequest:
        alert.message = "Bad Request";
        alert.code = 400;
        break;
      default:
        break;
    }

    return {
      product: null,
      error: alert,
    };
  }

  const { product } = result.value;

  return {
    product,
    error: null,
  };
}
