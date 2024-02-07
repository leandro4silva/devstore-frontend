import { ImageResponse } from "next/server";
import { env } from "@/env";
import colors from "tailwindcss/colors";
import { useGetProductBySlug } from "@/hooks/products/use-get-product-by-slug";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { product } = await useGetProductBySlug(params);

  const productImageUrl = product
    ? new URL(product.image, env.APP_URL).toString()
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={productImageUrl} alt="" style={{ width: "100%" }} />
      </div>
    ),
    {
      ...size,
    },
  );
}
