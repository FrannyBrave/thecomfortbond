import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useCanonical } from "./hooks/useCanonical";
import { trackPinterestPage } from "./lib/pinterest";

import KitDetail from "./pages/KitDetail";
import FathersDayBanner from "./components/FathersDayBanner";
const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Shop = lazy(() => import("./pages/Shop"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const OurStory = lazy(() => import("./pages/OurStory"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminResetPassword = lazy(() => import("./pages/AdminResetPassword"));
const AdminReviews = lazy(() => import("./pages/AdminReviews"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const FathersDay = lazy(() => import("./pages/FathersDay"));


const queryClient = new QueryClient();

function AppRoutes() {
  useCanonical();
  const location = useLocation();
  useEffect(() => {
    trackPinterestPage();
  }, [location.pathname, location.search]);
  return (
    <>
      <FathersDayBanner />
      <Suspense fallback={null}>

        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/reset-password" element={<AdminResetPassword />} />
        <Route path="/admin/reviews" element={<AdminReviews />} />
        {/* Deactivated rebrand legacy routes — redirect to home */}
        <Route path="/resources" element={<Navigate to="/" replace />} />
        <Route path="/resources/:slug" element={<Navigate to="/" replace />} />
        <Route path="/blog/:slug" element={<Navigate to="/" replace />} />
        
        <Route path="/blueprint" element={<Navigate to="/" replace />} />
        <Route path="/blueprint-test" element={<Navigate to="/" replace />} />
        <Route path="/blueprint-pdf" element={<Navigate to="/" replace />} />
        <Route path="/blueprint-pro" element={<Navigate to="/" replace />} />
        <Route path="/blueprint-pro-pdf" element={<Navigate to="/" replace />} />
        <Route path="/free-sampler" element={<Index />} />
        <Route path="/kits" element={<Shop />} />
        <Route path="/kits/:slug" element={<KitDetail />} />
        <Route path="/bundle-access" element={<Navigate to="/" replace />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/thank-you-mothers-day" element={<Navigate to="/" replace />} />
        <Route path="/thank-you/:slug" element={<Navigate to="/thank-you" replace />} />
        <Route path="/family-visits" element={<Navigate to="/" replace />} />
        <Route path="/fathers-day" element={<FathersDay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    </>
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
