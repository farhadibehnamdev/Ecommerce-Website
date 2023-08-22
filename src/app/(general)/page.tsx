import DealsOfTheMonth from "@/components/website/presentational/DealsOfTheMonth";
import Hero from "@/components/website/presentational/Hero";
import OurBestseller from "@/components/website/presentational/OurBestseller";
import ShopByCategories from "@/components/website/presentational/ShopByCategories";
import WhatCustomerSays from "@/components/website/presentational/WhatCustomerSays";

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
