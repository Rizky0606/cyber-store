import { Button } from "@/components/ui/button";

const SectionPromotion = () => {
  return (
    <div className="relative w-full h-96 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center z-50">
        <div className="absolute md:px-40 lg:px-60 xl:px-96 text-center">
          <h3 className="font-thin text-[30px] lg:text-[60px] text-[#787878]">
            Big Summer <span className="font-bold text-white">Sale</span>
          </h3>
          <p className="text-[#787878] mb-7 px-20 md:px-30 line-clamp-1 md:line-clamp-2 lg:line-clamp-none">
            Experience ultimate comfort and style! Elevate your lifestyle with
            elegance and ease. Discover the perfect blend of convenience and
            sophistication today!
          </p>
          <Button
            variant={"outline"}
            className="py-5 px-8 text-[#FFFFFF] bg-transparent my-3"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <img
        src="./promotion/banner-promotion.png"
        alt="Banner Promotion"
        className="w-full h-96 absolute object-fill"
      />
    </div>
  );
};

export default SectionPromotion;
