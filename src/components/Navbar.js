import { useState } from "react";
import { Link } from "react-router-dom"
import "../sass/Navbar.scss"
import Cart from "./Cart"

export default function Navbar(){
    const [showCart,setShowCart] = useState(false);

    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link style={{textDecoration: "none"}} to="/about">About</Link>
                </li>
                <li onMouseOver={()=>setShowCart(true)} onMouseOut={()=>setShowCart(false)}>
                    <Cart showCart={showCart}/>
                </li>
            </ul>
        </div>
    )
}