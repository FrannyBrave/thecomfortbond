import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useCanonical } from "./hooks/useCanonical";
import { trackPinterestPage } from "./lib/pinterest";

import KitDetail from "./pages/KitDetail";
const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Shop = lazy(() => import("./pages/Shop"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const OurStory = lazy(() => import("./pages/OurStory"));

const queryClient = new QueryClient();

function AppRoutes() {
  useCanonical();
  const location = useLocation();
  useEffect(() => {
    trackPinterestPage();
  }, [location.pathname, location.search]);
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/about" element={<OurStory />} />
        {/* Deactivated rebrand legacy routes — redirect to home */}
        <Route path="/resources" element={<Navigate to="/" replace />} />
        <Route path="/resources/:slug" element={<Navigate to="/" replace />} />
        <Route path="/blog/:slug" element={<Navigate to="/" replace />} />
        <Route path="/blog/mothers-day-memory-care-family-guide" element={<Navigate to="/" replace />} />
        <Route path="/blueprint" element={<Navigate to="/" replace />} />
        <Route path="/blueprint-test" element={<Navigate to="/" replace />} />
        <Route path="/blueprint-pdf" element={<Navigate to="/" replace />} />
        <Route path="/blueprint-pro" element={<Navigate to="/" replace />} />
        <Route path="/blueprint-pro-pdf" element={<Navigate to="/" replace />} />
        <Route path="/free-sampler" element={<Index />} />
        <Route path="/kits" element={<Shop />} />
        <Route path="/kits/:slug" element={<KitDetail />} />
        <Route path="/bundle-access" element={<Navigate to="/" replace />} />
        <Route path="/thank-you" element={<Navigate to="/" replace />} />
        <Route path="/thank-you-mothers-day" element={<Navigate to="/" replace />} />
        <Route path="/thank-you/:slug" element={<Navigate to="/" replace />} />
        <Route path="/family-visits" element={<Navigate to="/" replace />} />
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
