import { ApiError } from "@/data/errors/api-error";

export class NotFound extends Error implements ApiError {
  constructor() {
    super("NotFound");
  }
}
