import { getProductBySlug } from "@/services/products";
import { ImageResponse } from "next/server";
import { env } from "@/env";
import colors from "tailwindcss/colors";

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
  const product = await getProductBySlug(params.slug);

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
