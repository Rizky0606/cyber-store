import { Button } from "@/components/ui/button";

import PlayStation from "@/assets/PlayStation.png";
import Airpods from "@/assets/apple_airpods.png";
import AppleVision from "@/assets/apple_vision.png";
import Macbook from "@/assets/MacBook_Air.png";

const SectionProduct = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col">
        <div className="flex flex-col items-center my-10 lg:my-0 lg:flex-row">
          <img
            src={PlayStation}
            alt="PlayStation"
            className="min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] lg:min-w-[300px] lg:max-w-[300px] lg:min-h-[300px] lg:max-h-[300px]"
          />
          <div className="flex flex-col justify-center items-center lg:items-start p-5">
            <h4 className="text-[45px] font-normal mb-3">Playstation 5</h4>
            <p className="text-[#909090] text-center lg:text-left">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center py-10 lg:flex-row bg-[#D2D2DA]">
            <img
              src={Airpods}
              alt="Airpods"
              className="min-w-[150px] max-w-[150px] min-h-[150px] max-h-[150px] lg:min-w-[150px] lg:max-w-[150px] lg:min-h-[280px] lg:max-h-[280px]"
            />
            <div className="flex flex-col justify-center items-start p-10">
              <h5 className="text-[30px] font-thin mb-3">
                Apple AirPods <span className="font-bold">Max</span>
              </h5>
              <p className="text-[#909090] text-[15px] text-justify">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 lg:flex-row bg-[#353535]">
            <img
              src={AppleVision}
              alt="Apple Vision"
              width={150}
              className="object-contain"
            />
            <div className="flex flex-col justify-center items-center lg:items-start p-10 text-[#EDEDED]">
              <h5 className="text-[30px] font-thin mb-3">
                Apple Vision <span className="font-bold">Pro</span>
              </h5>
              <p className="text-[#909090] text-center lg:text-left">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse py-10 items-center lg:flex-row bg-[#D2D2DA]">
        <div className="flex flex-col justify-center items-center lg:items-start m-10">
          <h5 className="text-[50px] font-thin mb-5">
            Macbook <span className="font-bold">Air</span>
          </h5>
          <p className="text-[#909090] text-center lg:text-start mb-5">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <Button
            variant={"outline"}
            className="bg-transparent py-5 px-8 border-black hover:bg-[#211C24] hover:text-[#FFFFFF]"
          >
            Shop Now
          </Button>
        </div>
        <img
          src={Macbook}
          alt="Macbook"
          className="min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] lg:min-w-[300px] lg:max-w-[300px] lg:min-h-[300px] lg:max-h-[300px]"
        />
      </div>
    </div>
  );
};

export default SectionProduct;
