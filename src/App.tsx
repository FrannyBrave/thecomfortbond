import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useCanonical } from "./hooks/useCanonical";
import { trackPinterestPage } from "./lib/pinterest";

const Index = lazy(() => import("./pages/Index"));
const Resources = lazy(() => import("./pages/Resources"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const OurStory = lazy(() => import("./pages/OurStory"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlueprintTest = lazy(() => import("./pages/BlueprintTest"));
const BlueprintDocument = lazy(() => import("./pages/BlueprintDocument"));
const BlueprintLandingPage = lazy(() => import("./components/BlueprintLandingPage"));
const BlueprintProDocument = lazy(() => import("./pages/BlueprintProDocument"));
const MorningSamplerLandingPage = lazy(() => import("./components/MorningSamplerLandingPage"));
const BlueprintProSalesPage = lazy(() => import("./components/BlueprintProSalesPage"));
const Kits = lazy(() => import("./pages/Kits"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const BundleAccess = lazy(() => import("./pages/BundleAccess"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ThankYouMothersDay = lazy(() => import("./pages/ThankYouMothersDay"));
const ThankYouConnectionKit = lazy(() => import("./pages/ThankYouConnectionKit"));
const FamilyVisits = lazy(() => import("./pages/FamilyVisits"));
const MothersDayMemoryCare = lazy(() => import("./pages/MothersDayMemoryCare"));

const queryClient = new QueryClient();

function AppRoutes() {
  useCanonical();
  const location = useLocation();
  // Pinterest SPA page-visit event — fires on every route change
  // (initial mount + every subsequent client-side navigation).
  useEffect(() => {
    trackPinterestPage();
  }, [location.pathname, location.search]);
  return (
    <Suspense fallback={null}>
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
          <Route path="/thank-you" element={<ThankYouConnectionKit />} />
          <Route path="/thank-you-mothers-day" element={<ThankYouMothersDay />} />
          <Route path="/thank-you/:slug" element={<ThankYou />} />
          <Route path="/family-visits" element={<FamilyVisits />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
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
