import { BadRequest } from "@/services/errors/bad-request-error";
import { NotFound } from "@/services/errors/not-found-error";
import { Api } from "../api";

export class Service {
  protected readonly api: Api;

  constructor() {
    this.api = new Api();
  }

  async validateResponse(response: Response): Promise<Error | null> {
    if (response.status === 400) {
      return new BadRequest();
    }

    if (response.status === 404) {
      return new NotFound();
    }

    return null;
  }
}
