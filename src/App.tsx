import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useContext, ReactNode } from 'react';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create the NavVisibility Context
interface NavVisibilityContextType {
  isNavVisible: boolean;
  toggleNavVisibility: () => void;
  setNavVisibility: (visible: boolean) => void;
}

const NavVisibilityContext = createContext<NavVisibilityContextType>({
  isNavVisible: true,
  toggleNavVisibility: () => {},
  setNavVisibility: () => {}
});

// NavVisibilityProvider Component
export const NavVisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(prev => !prev);
  };

  const setNavVisibility = (visible: boolean) => {
    setIsNavVisible(visible);
  };

  return (
    <NavVisibilityContext.Provider value={{ 
      isNavVisible, 
      toggleNavVisibility, 
      setNavVisibility 
    }}>
      {children}
    </NavVisibilityContext.Provider>
  );
};

// Custom hook to use NavVisibility Context
export const useNavVisibility = () => {
  return useContext(NavVisibilityContext);
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <NavVisibilityProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </NavVisibilityProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;