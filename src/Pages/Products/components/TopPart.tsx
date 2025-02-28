import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TopPart = ({ countData }: { countData: number }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between my-5 pr-14">
        <h3 className="hidden lg:block text-[17px] text-[#787878] font-medium">
          Selected Products: <span className="text-black">{countData}</span>
        </h3>
        <div className="my-3 lg:my-0">
          <Select>
            <SelectTrigger className="w-[120px] lg:w-[180px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="rating">By Rating</SelectItem>
              <SelectItem value="popularity">By Popularity</SelectItem>
              <SelectItem value="new">By New</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default TopPart;
