import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams;

  if (!query) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-4">
        <Link
          href={`product/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            className="group-hover:scale-105 transition-transform duration-500"
            alt="asdasd"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`product/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            className="group-hover:scale-105 transition-transform duration-500"
            alt="asdasd"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`product/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            className="group-hover:scale-105 transition-transform duration-500"
            alt="asdasd"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`product/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            className="group-hover:scale-105 transition-transform duration-500"
            alt="asdasd"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
