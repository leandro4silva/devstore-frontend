import data from "../data.json";

export async function GET() {
  const featureProducts = data.products.filter((product) => product.featured);
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 seconds
  return Response.json(featureProducts);
}
