import { getAllProducts } from "@/global/api/products";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import BreadcrumbComp from "@/components/BreadcrumbComp";
import FilterProduct from "./components/FilterProduct";
import TopPart from "./components/TopPart";
import ListProduct from "./components/ListProduct";

const Products = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isPending, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts({ page: currentPage, limit: null }),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 menit
  });

  useEffect(() => {
    refetch();
  }, [currentPage]);

  return (
    <div>
      <div className="hidden lg:block">
        <BreadcrumbComp />
      </div>
      <div className="lg:flex lg:flex-row lg:mx-40">
        <div className="lg:basis-1/4">
          <FilterProduct />
        </div>
        <div className="lg:basis-3/4 mx-10 lg:mx-10">
          <TopPart countData={data?.items?.length} />
          <ListProduct
            data={data}
            isPending={isPending}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
