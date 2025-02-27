import PaginationComp from "@/components/PaginationComp";
import ProductItemComp from "@/components/ProductItemComp";
import SkeletonComp from "@/components/SkeletonComp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllProducts } from "@/global/api/products";
import { TypeProduct } from "@/type/typeProduct";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ListCatalog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isPending, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts({ page: currentPage, limit: null }),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 menit
  });
  console.log(data);

  useEffect(() => {
    refetch();
  }, [currentPage]);

  if (isPending) return <SkeletonComp />;

  return (
    <>
      <div className="flex flex-row justify-between my-5 pr-14">
        <h3 className="text-[17px] text-[#787878] font-medium">
          Selected Products:{" "}
          <span className="text-black">{data?.items?.length}</span>
        </h3>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="rating">By Rating</SelectItem>
            <SelectItem value="popularity">By Popularity</SelectItem>
            <SelectItem value="new">By New</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-between pr-14">
        {data?.data?.map((product: TypeProduct) => (
          <ProductItemComp key={product.id} product={product} />
        ))}
      </div>
      {data?.pages > 1 && (
        <PaginationComp
          totalPage={data?.pages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default ListCatalog;
