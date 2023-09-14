import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SecondPage from "./components/user-input-page/user-input";
import App from "./App";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="projects" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
