import { useState } from "react";
import Navbar from "./Navbar";
import ProductManagement from "./ProductManagement";
import { useDispatch } from "react-redux";
import { increment } from "../features/cartCount/cartCountSlice";

export default function ProductDetailsPage() {
    const [cartCount, setCartCount] = useState(0);
    const dispatch = useDispatch();

    function updateCartCount(clear=false){
        if(clear) {
        setCartCount(0);        
        }else {
        setCartCount((currentCount) => (currentCount+1));
        console.log("inside updateCartCount")
        dispatch(increment())
        }
    }

    return (
        <div>
            <ProductManagement productSelected={updateCartCount}/>
        </div>
    )
}