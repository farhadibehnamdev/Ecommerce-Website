import DealsOfTheMonth from "@/components/website/DealsOfTheMonth";
import Hero from "@/components/website/Hero";
import OurBestseller from "@/components/website/OurBestseller";
import ShopByCategories from "@/components/website/ShopByCategories";
import WhatCustomerSays from "@/components/website/WhatCustomerSays";

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
