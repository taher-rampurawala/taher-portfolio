import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import TaherHomePage from "@/pages/TaherHomePage";
import NotFoundPage from "@/pages/NotFoundPage";

// Only the portfolio page and a 404 remain; the template's 59 demo pages were removed.
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<TaherHomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
