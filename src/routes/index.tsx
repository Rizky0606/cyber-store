import Hero from "@/components/Hero";
import Navbar from "@/components/Nav/Navbar";
import ProductCategory from "@/components/ProductCategory";
import Section from "@/components/Section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <ProductCategory />
    </div>
  );
}
