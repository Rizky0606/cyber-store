import ProductItemComp from "@/components/ProductItemComp";
import SkeletonComp from "@/components/SkeletonComp";
import { getAllProducts } from "@/global/api/products";
import { TypeProduct } from "@/type/typeProduct";
import { useQuery } from "@tanstack/react-query";

const NewArrival = () => {
  const { data, isPending } = useQuery({
    queryKey: ["newArrival"],
    queryFn: () => getAllProducts({ page: null, limit: 8 }),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 menit
  });

  if (isPending) return <SkeletonComp />;

  return (
    <div className="grid grid-cols-2 justify-center gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 lg:justify-between">
      {data?.map((product: TypeProduct) => (
        <ProductItemComp key={product.id} product={product} />
      ))}
    </div>
  );
};

export default NewArrival;
