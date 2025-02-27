import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewArrival from "./components/NewArrival";

const SummaryProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-10 lg:py-20 lg:px-52">
      <div>
        <Tabs defaultValue="newArrival">
          <TabsList>
            <TabsTrigger value="newArrival">New Arrival</TabsTrigger>
            <TabsTrigger value="bestSeller">Best Seller</TabsTrigger>
            <TabsTrigger value="featuredProducts">
              Featured Products
            </TabsTrigger>
          </TabsList>
          <TabsContent value="newArrival">
            <NewArrival />
          </TabsContent>
          <TabsContent value="bestSeller">
            <p>Best Sellter</p>
          </TabsContent>
          <TabsContent value="featuredProducts">
            <p>Featured Products</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SummaryProduct;
