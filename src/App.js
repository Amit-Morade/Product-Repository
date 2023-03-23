import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";

export default function App(){
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}