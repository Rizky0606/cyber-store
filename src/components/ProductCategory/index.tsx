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

const ProductCategory = () => {
  const listProductCategory = [
    {
      name: "Phones",
      icon: Smartphone,
    },
    {
      name: "Smart Watches",
      icon: Watch,
    },
    {
      name: "Cameras",
      icon: Camera,
    },
    {
      name: "Headphones",
      icon: Headphones,
    },
    {
      name: "Computers",
      icon: Computer,
    },
    {
      name: "Gaming",
      icon: Gamepad,
    },
  ];
  return (
    <div className="py-20 px-52 bg-[#FAFAFA]">
      <div className="flex flex-row justify-between items-center mb-5">
        <h3 className="font-semibold text-[20px]">Browse By Category</h3>
        <div className="flex flex-row">
          <ChevronLeft size={25} className="mr-3" />
          <ChevronRight size={25} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-5">
        {listProductCategory.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center w-full h-full p-4 rounded-md bg-[#EDEDED]"
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
