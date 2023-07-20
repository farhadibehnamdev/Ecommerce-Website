import DealsOfTheMonth from "@/components/presentational/DealsOfTheMonth";
import Hero from "@/components/presentational/Hero";
import OurBestseller from "@/components/presentational/OurBestseller";
import ShopByCategories from "@/components/presentational/ShopByCategories";
import WhatCustomerSays from "@/components/presentational/WhatCustomerSays";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden bg-white mx-auto max-w-full">
      <Hero />
      <ShopByCategories />
      <OurBestseller />
      <DealsOfTheMonth />
      <WhatCustomerSays />
    </main>
  );
}
