import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Dashboard from "./pages/Dashboard"
import BlockchainPage from "./pages/BlockchainPage"
import SecurityPage from "./pages/SecurityPage"
import SustainabilityPage from "./pages/SustainabilityPage"
import CompliancePage from "./pages/CompliancePage"
import IntegrationPage from "./pages/IntegrationPage"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blockchain" element={<BlockchainPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/integration" element={<IntegrationPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App