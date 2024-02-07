import { env } from "@/env";
import { RequestInit } from "next/dist/server/web/spec-extension/request";

export class Api {
  async fetch(path: string, init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
    const apiPrefix = "/api";
    const url = new URL(apiPrefix.concat(path), baseUrl);

    return fetch(url, init);
  }
}
