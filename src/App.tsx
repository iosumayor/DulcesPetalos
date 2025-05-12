import { Routes, Route } from "react-router-dom";
import { Home } from "./ui/views/Home/Home";
import { ProductDetail } from "./ui/views/ProductDetail/ProductDetail";
import { LanguageProvider } from "./core/contexts/LanguageContext/LanguageProvider";
import { ThemeProvider } from "./core/contexts/ThemeContext/ThemeProvider";
function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
