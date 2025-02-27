import { useState } from "react";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { currencyNumberToIdr } from "@/lib/numberCurrency";
import { TypeProduct } from "@/type/typeProduct";
import { useNavigate } from "react-router";

const ProductItemComp = ({ product }: { product: TypeProduct }) => {
  const [love, setLove] = useState(false);

  const navigate = useNavigate();

  const handleClickLove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLove(!love);
  };

  return (
    <div
      key={product.id}
      className="relative flex flex-col items-center rounded-md p-5 bg-[#F6F6F6] cursor-pointer hover:bg-[#dcdcdc] hover:shadow-md"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <Button
        className="absolute right-5 p-0 m-0 h-7 w-7 bg-trasparent border-none border-transparent shadow-none hover:bg-transparent"
        onClick={handleClickLove}
      >
        <Heart
          color={love ? "red" : "#909090"}
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </Button>
      <img
        src={product.image}
        alt={product.name}
        className="w-36 h-40 my-3 items-center p-2"
      />
      <h5 className="text-center font-medium text-[13px] line-clamp-1 lg:line-clamp-none">
        {product.name}
      </h5>
      <p className="text-center my-3 font-bold">
        {currencyNumberToIdr(product.price)}
      </p>
      <Button className="px-10 py-1">Buy Now</Button>
    </div>
  );
};

export default ProductItemComp;
