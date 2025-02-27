import { useState } from "react";
import {
  Heart,
  ShoppingCart,
  User,
  Menu,
  Home,
  Box,
  Phone,
  FileText,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const activePath = useLocation();

  const listButtonMenu = [
    {
      name: "Home",
      link: "/",
      icon: Home,
    },
    {
      name: "Products",
      link: "/products",
      icon: Box,
    },
    {
      name: "Contact Us",
      link: "/contact",
      icon: Phone,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: FileText,
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
    <div className="flex flex-wrap items-center justify-between p-4 bg-white text-black shadow-sm font-mono">
      <p className="font-bold text-2xl flex-1">cyber</p>
      <div className="hidden lg:flex flex-1 justify-center">
        <Input className="w-full max-w-xs bg-gray-100" placeholder="Search" />
      </div>
      <div className="flex-1 flex justify-end space-x-5">
        <div className="hidden lg:flex gap-5">
          {listButtonMenu.map((item, idx) => (
            <Button
              key={idx}
              className={`bg-transparent border-none border-transparent shadow-none text-black text-md ${activePath.pathname === item.link ? "underline underline-offset-8" : ""} hover:underline hover:underline-offset-8 hover:bg-transparent hover:shadow-none`}
              onClick={() => navigate(item.link)}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="hidden lg:flex lg:gap-2">
          {listMenuProfile.map((item, idx) => (
            <Button
              key={idx}
              className="bg-transparent border-none border-transparent shadow-none text-black hover:bg-transparent"
            >
              <item.icon size={20} />
            </Button>
          ))}
        </div>
        <div className="lg:hidden flex items-center">
          <Button
            className="bg-transparent border-none border-transparent shadow-none text-black hover:bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden flex flex-col w-full mt-4 space-y-2">
          <Input className="w-full bg-gray-100" placeholder="Search" />
          <div className="flex justify-around mt-4">
            {listMenuProfile.map((item, idx) => (
              <Button
                key={idx}
                className="bg-transparent border-none border-transparent shadow-none text-black hover:bg-transparent"
              >
                <item.icon size={20} />
              </Button>
            ))}
          </div>
        </div>
      )}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#211C24] flex justify-around items-center h-16 z-[999]">
        {listButtonMenu.map((item, idx) => (
          <Button
            key={idx}
            variant={"outline"}
            className={`flex flex-col items-center rounded-xl min-w-28 max-w-28 min-h-10 max-h-10 p-6 ${activePath.pathname === item.link ? "text-blue-500" : "text-black"}`}
            onClick={() => navigate(item.link)}
          >
            <item.icon size={24} />
            <span className="text-xs">{item.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
