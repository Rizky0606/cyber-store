import Hero from "@/Pages/Home/components/Hero";
import ProductCategory from "@/Pages/Home/components/ProductCategory";
import SectionProduct from "@/Pages/Home/components/SectionProducts";
import SectionPromotion from "@/Pages/Home/components/SectionPromotion";
import SummaryProduct from "@/Pages/Home/components/SummaryProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <SectionProduct />
      <ProductCategory />
      <SummaryProduct />
      <SectionPromotion />
    </>
  );
};

export default Home;
