import { Product } from "@/data/types/product";
import { Either, left, right } from "@/data/core/either";
import { Service } from "@/data/core/services";
import { BadRequest } from "../errors/bad-request-error";
import { NotFound } from "../errors/not-found-error";

type GetProductBySlugServiceResponse = Either<
  BadRequest | NotFound,
  {
    product: Product;
  }
>;

export class GetProductBySlugService extends Service {
  async handle(slug: string): Promise<GetProductBySlugServiceResponse> {
    const response = await this.api.fetch(`/products/${slug}`, {
      cache: "no-cache",
    });

    const error = await this.validateResponse(response);

    if (error) {
      return left(error);
    }

    const product: Product = await response.json();

    return right({ product });
  }
}
