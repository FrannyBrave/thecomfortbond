import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import ThankYou from "./pages/ThankYou";
import ThankYouMothersDay from "./pages/ThankYouMothersDay";
import ThankYouConnectionKit from "./pages/ThankYouConnectionKit";
import FamilyVisits from "./pages/FamilyVisits";
import MothersDayMemoryCare from "./pages/MothersDayMemoryCare";
import { useCanonical } from "./hooks/useCanonical";
import { useEffect } from "react";
import { preloadPaddle } from "./lib/paddle";
import { trackPinterestPage } from "./lib/pinterest";

const queryClient = new QueryClient();

function AppRoutes() {
  useCanonical();
  const location = useLocation();
  useEffect(() => {
    preloadPaddle();
  }, []);
  // Pinterest SPA page-visit event — fires on every route change
  // (initial mount + every subsequent client-side navigation).
  useEffect(() => {
    trackPinterestPage();
  }, [location.pathname, location.search]);
  return (
    <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          <Route path="/blog/mothers-day-memory-care-family-guide" element={<MothersDayMemoryCare />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
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
          <Route path="/thank-you" element={<ThankYouMothersDay />} />
          <Route path="/thank-you-connection-kit" element={<ThankYouConnectionKit />} />
          <Route path="/thank-you/:slug" element={<ThankYou />} />
          <Route path="/family-visits" element={<FamilyVisits />} />
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
