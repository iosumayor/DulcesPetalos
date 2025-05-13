import { Routes, Route } from "react-router-dom";
import { Home } from "./ui/views/Home/Home";
import { ProductDetail } from "./ui/views/ProductDetail/ProductDetail";
import { LanguageProvider } from "./core/contexts/LanguageContext/LanguageProvider";
import { ThemeProvider } from "./core/contexts/ThemeContext/ThemeProvider";
import { ROUTES } from "./core/constants/routeConstants";
function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
        </Routes>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
