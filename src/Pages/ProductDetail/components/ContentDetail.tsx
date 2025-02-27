import { Button } from "@/components/ui/button";
import { currencyNumberToIdr } from "@/lib/numberCurrency";
import {
  ArrowDown,
  ArrowUp,
  Battery,
  Camera,
  Cpu,
  Eye,
  SignalHigh,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

const ContentDetail = ({ data }: { data: any }) => {
  const colors = ["black", "purple", "red", "yellow", "grey"];
  const sizeMemory = ["128GB", "256GB", "512GB", "1TB"];
  const spesifikasiProduct = [
    "Screen Size",
    "CPU",
    "Signal",
    "Camera",
    "Display",
    "Battery",
  ];
  const spekProduct = [
    '6.7"',
    "Apple A16 Bionic",
    "5G",
    "48-12 12MP",
    "Oled",
    "4323mAh",
  ];
  const iconSpesifikasi = [
    {
      icon: <Smartphone />,
    },
    {
      icon: <Cpu />,
    },
    {
      icon: <SignalHigh />,
    },
    {
      icon: <Camera />,
    },
    {
      icon: <Eye />,
    },
    {
      icon: <Battery />,
    },
  ];

  const [currentColor, setCurrentColor] = useState<number | null>(null);
  const [currentSizeMemory, setCurrentSizeMemory] = useState<number | null>(
    null
  );
  const [onExpandDescription, setOnExpandDescription] =
    useState<boolean>(false);

  return (
    <div className="my-10 mx-5">
      <p className="text-3xl font-semibold">{data?.name}</p>
      <p className="my-5 text-2xl font-medium">
        {currencyNumberToIdr(data?.price)}
      </p>
      <div className="flex flex-row items-center">
        <span>Select color : </span>
        <div className="mx-3">
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (currentColor === idx) {
                  setCurrentColor(null);
                } else {
                  setCurrentColor(idx);
                }
              }}
              className={`w-8 h-8 rounded-full mx-2 ${currentColor === idx ? "outline" : ""}`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        {sizeMemory.map((size, idx) => (
          <div
            key={idx}
            className={`py-3 px-8 my-5 min-w-32 max-w-3min-w-32 text-center rounded-lg bg-${currentSizeMemory === idx ? "black" : "slate-400"} border-2 cursor-pointer`}
            onClick={() => {
              if (currentSizeMemory === idx) {
                setCurrentSizeMemory(null);
              } else {
                setCurrentSizeMemory(idx);
              }
            }}
          >
            <span
              style={{
                color: currentSizeMemory === idx ? "white" : "black",
              }}
            >
              {size}
            </span>
          </div>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-3 justify-between gap-4">
          {iconSpesifikasi.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row rounded-lg bg-[#F4F4F4] px-3 py-2 min-w-[175px] max-w-[175px] max-h-20 min-h-20"
            >
              <div className="flex items-center ">{item.icon}</div>
              <div className="flex flex-col ml-3 justify-center items-stretch">
                <span className="font-medium text-[15px]">
                  {spesifikasiProduct[idx]}
                </span>
                <span className="text-[13px]">{spekProduct[idx]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-5">
        <span
          className={`text-[15px] text-[#6B6B6B] ${onExpandDescription ? "" : "line-clamp-3"} `}
        >
          {data?.description}
        </span>
        {onExpandDescription && <br />}
        <Button
          className="text-black text-bold my-3 flex items-center"
          variant={"outline"}
          onClick={() => setOnExpandDescription(!onExpandDescription)}
        >
          {onExpandDescription ? <ArrowUp /> : <ArrowDown />}{" "}
          {onExpandDescription ? "Show less" : "Show more"}
        </Button>
      </div>
      <div className="flex flex-row justify-between">
        <Button variant={"outline"} className="py-6 px-20">
          Add to Wishlist
        </Button>
        <Button variant={"default"} className="py-6 px-20">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ContentDetail;
