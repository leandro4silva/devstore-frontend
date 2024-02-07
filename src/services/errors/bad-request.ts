import { ApiError } from "@/data/errors/api-error";

export class BadRequest extends Error implements ApiError {
  constructor() {
    super("Bad Request");
  }
}
