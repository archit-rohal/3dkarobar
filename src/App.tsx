import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ExpertContact from "./pages/ExpertContact";
import NotFound from "./pages/NotFound";
import MetalPrinters from "./pages/printers/metal/";
import LaserPrinter from "./pages/printers/metal/Laser";
import EBMPrinter from "./pages/printers/metal/EBM";
import BinderjetPrinter from "./pages/printers/metal/Binderjet";
import LithographyPrinter from "./pages/printers/metal/Lithography";
import Printers from "./pages/printers/Printers";
import Materials from "./pages/materials/Materials";
import ManufacturingServices from "./pages/manufacturing-services/ManufacturingServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/printers" element={<Printers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expert-contact" element={<ExpertContact />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/manufacturing-services" element={<ManufacturingServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/printers/metal" element={<MetalPrinters />} />
          <Route path="/printers/metal/laser" element={<LaserPrinter />} />
          <Route path="/printers/metal/ebm" element={<EBMPrinter />} />
          <Route path="/printers/metal/binderjet" element={<BinderjetPrinter />} />
          <Route path="/printers/metal/lithography" element={<LithographyPrinter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
