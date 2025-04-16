import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignaturePage from "./pages/SignaturePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signatures" element={SignaturePage()}/>
      </Routes>
    </BrowserRouter>
  );
};