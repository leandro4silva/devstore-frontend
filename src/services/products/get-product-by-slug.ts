import { Product } from "@/data/types/product";
import { BadRequest } from "../errors/bad-request";
import { Either, left, right } from "@/data/core/either";
import { NotFound } from "../errors/not-found";
import { Service } from "@/data/core/services";

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
