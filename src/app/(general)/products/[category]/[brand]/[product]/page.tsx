import ProductDetails from "@/components/website/presentational/ProductDetails";

const ProductPage = function ({ params }: any) {
  console.log(params);
  return <ProductDetails />;
};

export default ProductPage;
