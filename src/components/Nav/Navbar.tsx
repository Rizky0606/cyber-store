import { Heart, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Navbar = () => {
  const listButtonMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const listMenuProfile = [
    {
      name: "Love",
      icon: Heart,
    },
    {
      name: "Cart",
      icon: ShoppingCart,
    },
    {
      name: "Profile",
      icon: User,
    },
  ];
  return (
    <div className="flex justify-center items-center px-10 h-16 bg-white text-black relative shadow-sm font-mono">
      <p className="font-bold text-2xl">cyber</p>
      <div>
        <Input className="w-72 mx-5 bg-gray-100" placeholder="Search" />
      </div>
      <div className="flex gap-5 mx-5">
        {listButtonMenu.map((item, idx) => (
          <Button
            key={idx}
            className="bg-trasparent border-none border-transparent shadow-none text-black text-md hover:bg-transparent hover:underline hover:decoration-2 hover:decoration-sky-500"
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="flex gap-2 ml-10">
        {listMenuProfile.map((item, idx) => (
          <Button
            key={idx}
            className="bg-trasparent border-none border-transparent shadow-none text-black hover:bg-transparent"
          >
            <item.icon size={20} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
