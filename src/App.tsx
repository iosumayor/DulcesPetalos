import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./ui/views/Home/Home";
import { ProductDetail } from "./ui/views/ProductDetail/ProductDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
