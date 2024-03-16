import ProductDetails from "@/app/(site)/products/[category]/[brand]/[product]/_components/product-details";

const ProductPage = function ({ params }: any) {
  console.log(params);
  return <ProductDetails />;
};

export default ProductPage;
