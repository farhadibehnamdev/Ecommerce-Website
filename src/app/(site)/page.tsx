import DealsOfTheMonth from "@/app/(site)/_components/deals-of-the-month";
import { Hero } from "@/app/_components/hero";
import OurBestseller from "@/app/(site)/_components/our-bestseller";
import ShopByCategories from "@/app/(site)/_components/shop-by-categories";
import Testimonial from "@/app/_components/testimonial/testimonial";

export default function Home() {
  return (
    <main className=" bg-white  ">
      <Hero />
      <ShopByCategories />
      <OurBestseller />
      <DealsOfTheMonth />
      <Testimonial />
    </main>
  );
}
