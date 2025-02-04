import { Button } from "../ui/button";

import IphoneImage from "../../assets/Iphone_Image.png";

const Hero = () => {
  return (
    <div className="h-[615px] bg-[#211C24] flex items-center justify-evenly">
      <div>
        <h1 className="text-[#FFFFFF] text-base">Pro.Beyond.</h1>
        <h2 className="text-[#FFFFFF] text-[72px]">
          IPhone 14 <span className="font-bold">Pro</span>
        </h2>
        <p className="text-[#FFFFFF] text-base">
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
