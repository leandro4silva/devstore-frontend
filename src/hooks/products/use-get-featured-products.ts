import { Alert } from "@/data/core/alert";
import { Product } from "@/data/types/product";
import { BadRequest } from "@/services/errors/bad-request";
import { GetProductsFeaturedService } from "@/services/products/get-products-featured";

interface GetFeaturedProductsReturn {
  products: Product[];
  error: Alert | null;
}

export async function useGetFeaturedProducts(): Promise<GetFeaturedProductsReturn> {
  const getFeaturedProductsService = new GetProductsFeaturedService();

  const result = await getFeaturedProductsService.handle();

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
      products: [],
      error: alert,
    };
  }

  const { products } = result.value;

  return {
    products,
    error: null,
  };
}
