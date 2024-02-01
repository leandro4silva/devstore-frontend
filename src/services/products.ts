import { api } from "@/data/api";
import { Product } from "@/data/types/product";

export const getFeaturedProducts = async () => {
  try {
    const response = await api("/products/featured", {
      cache: "no-cache",
    });

    const product: Product[] = await response.json();

    return product;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const response = await api(`/products/${slug}`, {
      cache: "no-cache",
    });

    const product: Product = await response.json();

    return product;
  } catch (err) {
    console.error(err);
    return null;
  }
};
