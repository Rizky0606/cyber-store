import BreadcrumbComp from "@/components/BreadcrumbComp";
import FilterProduct from "./components/FilterProduct";
import ListCatalog from "./components/ListCatalog";

const Products = () => {
  return (
    <div>
      <BreadcrumbComp />
      <div className="flex flex-row mx-40">
        <div className="basis-1/4">
          <FilterProduct />
        </div>
        <div className="basis-3/4 mx-10">
          <ListCatalog />
        </div>
      </div>
    </div>
  );
};

export default Products;
