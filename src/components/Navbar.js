import "../sass/Navbar.scss"
import Cart from "./Cart"

export default function Navbar({cartCount, clearCart}){
    return (
        <div className="navbar">
            <ul>
                <li>
                    About
                </li>
                <li>
                    <Cart cartCount={cartCount} clearCart={clearCart}/>
                </li>
            </ul>
        </div>
    )
}