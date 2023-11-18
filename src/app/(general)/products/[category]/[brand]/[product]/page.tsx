import ProductDetails from "@/components/website/ProductDetails";

const ProductPage = function ({ params }: any) {
  console.log(params);
  return <ProductDetails />;
};

export default ProductPage;
