import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import RosterBgmi from "./pages/RosterBgmi";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import { Merch, Tournaments, Fanzone, Careers, Sponsors } from "./pages/ComingSoonPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/roster" element={<Navigate to="/roster/bgmi" replace />} />
            <Route path="/roster/bgmi" element={<RosterBgmi />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/fanzone" element={<Fanzone />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
