import { Button } from "@/components/ui/button";

import IphoneImage from "@/assets/Iphone_Image.png";

const Hero = () => {
  return (
    <div className="lg:h-[615px] bg-[#211C24] flex flex-col lg:flex-row justify-center items-center lg:items-center lg:justify-evenly">
      <div className="flex flex-col justify-center items-center mt-10 lg:items-start lg:w-[395px]">
        <h1 className="text-[#7A777C] text-[30px]">Pro.Beyond.</h1>
        <h2 className="text-[#FFFFFF] text-[40px] lg:text-[72px]">
          IPhone 14 <span className="font-bold">Pro</span>
        </h2>
        <p className="text-[#FFFFFF] text-center lg:text-start text-base">
          Created to change everything for the better. For everyone
        </p>
        <Button
          className="py-5 px-8 text-[#FFFFFF] bg-transparent my-3"
          variant={"outline"}
        >
          Shop Now
        </Button>
      </div>
      <div>
        <img
          src={IphoneImage}
          alt="Image Iphone"
          className="w-[395px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
