import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from "./components/user-input-page/user-input";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppRouter = () => {
  return root.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="projects" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
