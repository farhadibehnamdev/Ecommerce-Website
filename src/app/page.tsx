import DealsOfTheMonth from "@/app/(site)/_components/deals-of-the-month";
import Hero from "@/app/_components/hero";
import OurBestseller from "@/app/(site)/_components/our-bestseller";
import ShopByCategories from "@/app/(site)/_components/shop-by-categories";
import Testimonial from "@/app/_components/testimonial/testimonial";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden bg-white mx-auto max-w-full">
      <Hero />
      <ShopByCategories />
      <OurBestseller />
      <DealsOfTheMonth />
      <Testimonial />
    </main>
  );
}
