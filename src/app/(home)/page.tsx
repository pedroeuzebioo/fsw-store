"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês!"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
}