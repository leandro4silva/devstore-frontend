import { Product } from "@/data/types/product";
import { BadRequest } from "../errors/bad-request";
import { Either, left, right } from "@/data/core/either";
import { Service } from "@/data/core/services";

type GetProductsFeaturedServiceResponse = Either<
  BadRequest,
  {
    products: Product[];
  }
>;

export class GetProductsFeaturedService extends Service {
  async handle(): Promise<GetProductsFeaturedServiceResponse> {
    const response = await this.api.fetch("/products/featured", {
      cache: "no-cache",
    });

    const error = await this.validateResponse(response);

    if (error) {
      return left(error);
    }

    const products: Product[] = await response.json();

    return right({ products });
  }
}
