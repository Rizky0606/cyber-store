import { useState } from "react";

import Iphone from "@/assets/Iphone_Image.png";
import Macbook from "@/assets/MacBook_Air.png";
import Ps from "@/assets/PlayStation.png";
import Vision from "@/assets/apple_vision.png";
import { Button } from "@/components/ui/button";
const ImageViewer = () => {
  const arrImage = [Iphone, Macbook, Ps, Vision];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <div className="flex flex-row my-10">
      <div className="flex flex-col justify-center items-center">
        {arrImage.map((item, idx) => (
          <Button
            key={idx}
            className={`border-none ${idx !== currentImageIndex ? "opacity-50" : ""} bg-transparent shadow-none w-20 h-24 my-5 hover:bg-transparent ${idx !== currentImageIndex ? "hover:opacity-100" : ""}`}
            onClick={() => setCurrentImageIndex(idx)}
          >
            <img key={idx} src={item} className="object-contain" />
          </Button>
        ))}
      </div>
      <div className="mx-16 py-10">
        <img
          src={arrImage[currentImageIndex]}
          className="max-w-[400px] min-w-[400px] max-h-[600px] min-h-[600px]"
          alt="Iphone 15"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
