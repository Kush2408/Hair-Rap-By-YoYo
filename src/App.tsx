import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingProvider } from "@/context/BookingContext";
import { AIChatProvider } from "@/context/AIChatContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import MyBookings from "./pages/MyBookings";
import AIChat from "./pages/AIChat";
import AIChatWidget from "./components/AIChatWidget";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookingProvider>
        <AIChatProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="/ai-chat" element={<AIChat />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AIChatWidget />
          </BrowserRouter>
        </AIChatProvider>
      </BookingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
