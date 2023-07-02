import Hero from "@/components/hero/Hero";
import ShopByCategories from "@/components/presentational/ShopByCategories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden bg-white mx-auto max-w-full">
      <Hero />
      <ShopByCategories />
    </main>
  );
}
