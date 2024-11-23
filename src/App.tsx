import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import EntityListPage from "./pages/EntityListPage";
import NotFoundPage from "./pages/NotFoundPage";
import EntityPage from "./pages/EntityPage";
import { AnimatePresence } from "framer-motion";
import AnimatedRoute from "./components/AnimatedRoute";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { ThemeProvider } from "./components/Theme/ThemeProvider";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <ThemeProvider storageKey="starwars-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <main className="flex-1">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <AnimatedRoute>
                    <SearchPage />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/entities/:type"
                element={
                  <AnimatedRoute>
                    <EntityListPage />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/entity/*"
                element={
                  <AnimatedRoute>
                    <EntityPage />
                  </AnimatedRoute>
                }
              />
              <Route
                path="*"
                element={
                  <AnimatedRoute>
                    <NotFoundPage />
                  </AnimatedRoute>
                }
              />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
