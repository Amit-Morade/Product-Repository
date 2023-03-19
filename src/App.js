import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductManagement from "./components/ProductManagement";

export default function App(){
  const [cartCount, setCartCount] = useState(0);

  function updateCartCount(clear=false){
    if(clear) {
      setCartCount(0);
    }else {
      setCartCount((currentCount) => (currentCount+1));
    }
    
  }

  return (
    <div>
      <Navbar cartCount={cartCount} clearCart={updateCartCount}/>
      <ProductManagement productSelected={updateCartCount}/>
    </div>
  )
}