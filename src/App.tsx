import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import Home from "@/Pages/Home";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import Products from "@/Pages/Products";
import ProductDetail from "./Pages/ProductDetail";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Outlet />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
