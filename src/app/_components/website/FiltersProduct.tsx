import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterBySize from "./FilterBySize";
import ProductCategories from "./ProductCategories";

const FiltersProduct = function () {
  return (
    <div className="-mt-5">
      <ProductCategories />
      <FilterByPrice />
      <FilterByColor />
      <FilterBySize />
    </div>
  );
};

export default FiltersProduct;
