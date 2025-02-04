import { Button } from "../ui/button";

import PlayStation from "../../assets/PlayStation.png";
import Airpods from "../../assets/apple_airpods.png";
import AppleVision from "../../assets/apple_vision.png";
import Macbook from "../../assets/MacBook_Air.png";

const Section = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <img src={PlayStation} alt="PlayStation" />
          <div className="flex flex-col justify-center items-start p-5">
            <h4 className="text-[45px] font-normal mb-3">Playstation 5</h4>
            <p className="text-[#909090]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row bg-[#D2D2DA]">
            <img src={Airpods} alt="Airpods" />
            <div className="flex flex-col justify-center items-start p-10">
              <h5 className="text-[30px] font-thin mb-3">
                Apple <br />
                AirPods <br />
                <span className="font-bold">Max</span>
              </h5>
              <p className="text-[#909090] text-[15px] text-justify">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-[#353535]">
            <img
              src={AppleVision}
              alt="Apple Vision"
              width={150}
              className="object-contain"
            />
            <div className="flex flex-col justify-center items-start p-10 text-[#EDEDED]">
              <h5 className="text-[30px] font-thin mb-3">
                Apple <br /> Vision <span className="font-bold">Pro</span>
              </h5>
              <p className="text-[#909090]">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-[#D2D2DA]">
        <div className="flex flex-col justify-center items-start m-10">
          <h5 className="text-[50px] font-thin mb-5">
            Macbook <br /> <span className="font-bold">Air</span>
          </h5>
          <p className="text-[#909090] mb-5">
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
        <img src={Macbook} alt="Macbook" className="py-10" />
      </div>
    </div>
  );
};

export default Section;
