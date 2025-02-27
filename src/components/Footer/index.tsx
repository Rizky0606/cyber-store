import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const listFooter = {
    listService: [
      {
        id: 1,
        name: "Bonus Program",
      },
      {
        id: 2,
        name: "Gift Cards",
      },
      {
        id: 3,
        name: "Credit and Payment",
      },
      {
        id: 4,
        name: "Service Contracts",
      },
      {
        id: 5,
        name: "Non-cash Accounts",
      },
      {
        id: 6,
        name: "Payment",
      },
    ],
    listAssistanceBuyer: [
      {
        id: 1,
        name: "Find an Order",
      },
      {
        id: 2,
        name: "Terms of Delivery",
      },
      {
        id: 3,
        name: "Exchange and Return of Goods",
      },
      {
        id: 4,
        name: "Guarantee",
      },
      {
        id: 5,
        name: "Frequently asked questions",
      },
      {
        id: 6,
        name: "Terms of Use of the Site",
      },
    ],
  };

  const listSocialMedia = [
    {
      id: 1,
      icon: Twitter,
    },
    {
      id: 2,
      icon: Facebook,
    },
    {
      id: 3,
      icon: Instagram,
    },
  ];

  return (
    <div className="py-20 px-20 lg:py-20 lg:px-52 flex flex-col bg-black">
      <div className="grid grid-cols-1 justify-center text-center lg:grid-cols-3 lg:justify-between gap-5">
        <div className="pr-5">
          <h2 className="text-white text-[25px] font-semibold mb-4">cyber</h2>
          <p className="text-[#CFCFCF]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div>
          <h2 className="text-white text-[20px] mt-10 lg:mt-0 font-semibold mb-4">
            Service
          </h2>
          {listFooter.listService.map((item) => (
            <p
              key={item.id}
              className="flex flex-col items-center lg:items-start text-[#CFCFCF] mb-3"
            >
              {item.name}
            </p>
          ))}
        </div>
        <div>
          <h2 className="text-white text-[20px] font-semibold mb-4">
            Assistance of the buyer
          </h2>
          {listFooter.listAssistanceBuyer.map((item) => (
            <p
              key={item.id}
              className="flex flex-col items-center lg:items-start text-[#CFCFCF] mb-3"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-10 lg:my-0 flex-row gap-3">
        {listSocialMedia.map((item) => (
          <Button
            key={item.id}
            className="bg-trasparent border-none border-transparent shadow-none"
          >
            <item.icon size={30} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
