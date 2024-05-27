import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import EntityListPage from "./pages/EntityListPage";
import NotFoundPage from "./pages/NotFoundPage";
import EntityPage from "./pages/EntityPage";
import { AnimatePresence } from "framer-motion";
import AnimatedRoute from "./components/AnimatedRoute";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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
    </AnimatePresence>
  );
};

export default App;
