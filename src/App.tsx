import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DestinationDetails from "./pages/DestinationDetails";
import Booking from "./pages/Booking";
import About from "./pages/About";
import AllDestinations from "./pages/AllDestinations";
import AllServices from "./pages/AllServices";
import ServiceBooking from "./pages/ServiceBooking";
import WhatsAppChat from "./components/WhatsAppChat";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<AllDestinations />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/service-booking/:serviceId" element={<ServiceBooking />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Global WhatsApp Chat */}
          <WhatsAppChat />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
