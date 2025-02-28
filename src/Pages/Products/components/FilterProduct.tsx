import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

const FilterProduct = () => {
  const listHandphone = ["Apple", "Samsung", "Xiaomi"];
  return (
    <>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="hidden lg:block"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {listHandphone.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    key={idx}
                    value={item}
                    className="mr-2"
                  />
                  <label>{item}</label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button variant={"outline"} className="block lg:hidden w-32 my-8">
        <span className="flex flex-row items-center justify-center">
          Filters <Settings2 className="ml-2" />
        </span>
      </Button>
    </>
  );
};

export default FilterProduct;
