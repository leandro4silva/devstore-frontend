import { useGetFeaturedProducts } from "@/hooks/products/use-get-featured-products";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { products } = await useGetFeaturedProducts();
  const [highLightedProduct, ...otherProducts] = products;

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      {products.length > 0 ? (
        <>
          <Link
            href={`/product/${highLightedProduct.slug}`}
            className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
          >
            <Image
              src={highLightedProduct.image}
              className="group-hover:scale-105 transition-transform duration-500"
              alt=""
              width={920}
              height={920}
              quality={100}
            />

            <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">
                {highLightedProduct.title}
              </span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {highLightedProduct.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </Link>

          {otherProducts.map((product, index) => {
            return (
              <Link
                key={index}
                href={`product/${product.slug}`}
                className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
              >
                <Image
                  src={product.image}
                  className="group-hover:scale-105 transition-transform duration-500"
                  alt="asdasd"
                  width={920}
                  height={920}
                  quality={100}
                />

                <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                  <span className="text-sm truncate"> {product.title}</span>
                  <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </Link>
            );
          })}
        </>
      ) : (
        <h3>Nenhum produto cadastrado ainda</h3>
      )}
    </div>
  );
}
