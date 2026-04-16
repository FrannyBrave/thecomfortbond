import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import ArticleDetail from "./pages/ArticleDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import OurStory from "./pages/OurStory";
import NotFound from "./pages/NotFound";
import BlueprintTest from "./pages/BlueprintTest";
import BlueprintDocument from "./pages/BlueprintDocument";
import BlueprintLandingPage from "./components/BlueprintLandingPage";
import BlueprintProDocument from "./pages/BlueprintProDocument";
import MorningSamplerLandingPage from "./components/MorningSamplerLandingPage";
import BlueprintProSalesPage from "./components/BlueprintProSalesPage";
import Kits from "./pages/Kits";
import RefundPolicy from "./pages/RefundPolicy";
import BundleAccess from "./pages/BundleAccess";
import { useCanonical } from "./hooks/useCanonical";
import { useEffect } from "react";
import { preloadPaddle } from "./lib/paddle";

const queryClient = new QueryClient();

function AppRoutes() {
  useCanonical();
  useEffect(() => {
    preloadPaddle();
  }, []);
  return (
    <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/blueprint-test" element={<BlueprintTest />} />
          <Route path="/blueprint-pdf" element={<BlueprintDocument />} />
          <Route path="/blueprint" element={<BlueprintLandingPage />} />
          <Route path="/free-sampler" element={<MorningSamplerLandingPage />} />
          <Route path="/blueprint-pro-pdf" element={<BlueprintProDocument />} />
          <Route path="/blueprint-pro" element={<BlueprintProSalesPage />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/bundle-access" element={<BundleAccess />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
