import { TypeProduct } from "@/type/typeProduct";
import PaginationComp from "@/components/PaginationComp";
import ProductItemComp from "@/components/ProductItemComp";
import SkeletonComp from "@/components/SkeletonComp";
const ListProduct = ({
  data,
  isPending,
  setCurrentPage,
}: {
  data: any;
  isPending: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  if (isPending) return <SkeletonComp />;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center lg:justify-between xl:pr-14">
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

export default ListProduct;
