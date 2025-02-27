import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Computer,
  Gamepad,
  Headphones,
  Smartphone,
  Watch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const ProductCategory = () => {
  const navigate = useNavigate();
  const listProductCategory = [
    {
      name: "Phones",
      icon: Smartphone,
      link: "/products",
    },
    {
      name: "Smart Watches",
      icon: Watch,
      link: "/products",
    },
    {
      name: "Cameras",
      icon: Camera,
      link: "/products",
    },
    {
      name: "Headphones",
      icon: Headphones,
      link: "/products",
    },
    {
      name: "Computers",
      icon: Computer,
      link: "/products",
    },
    {
      name: "Gaming",
      icon: Gamepad,
      link: "/products",
    },
  ];
  return (
    <div className="px-10 py-10 lg:py-20 lg:px-52 bg-[#FAFAFA]">
      <div className="flex flex-row justify-between items-center mb-5">
        <h3 className="font-semibold text-[20px]">Browse By Category</h3>
        <div className="flex flex-row">
          <Button
            className="bg-transparent shadow-none w-10 h-10 lg:mr-5 border-none rounded-full hover:rounded-full hover:bg-[#211C24] hover:text-white"
            variant={"custom"}
          >
            <ChevronLeft size={25} />
          </Button>
          <Button
            className="bg-transparent shadow-none w-10 h-10 border-none rounded-full hover:rounded-full hover:bg-[#211C24] hover:text-white"
            variant={"custom"}
          >
            <ChevronRight size={25} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-between gap-5">
        {listProductCategory.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center w-full h-full p-4 rounded-md bg-[#EDEDED] cursor-pointer hover:bg-[#211C24] hover:text-white"
            onClick={() => {
              navigate(item.link);
            }}
          >
            <item.icon size={30} />
            <p className="mt-3">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
