import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FilterProduct = () => {
  const listHandphone = ["Apple", "Samsung", "Xiaomi"];
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
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
  );
};

export default FilterProduct;
