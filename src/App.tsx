import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import EntityListPage from "./pages/EntityListPage";
import NotFoundPage from "./pages/NotFoundPage";
import EntityPage from "./pages/EntityPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/entities/:type" element={<EntityListPage />} />
      <Route path="/entity/*" element={<EntityPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
