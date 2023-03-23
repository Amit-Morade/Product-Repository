import { useEffect, useState } from "react";
import ShoppingBag from "../images/shopping-bag.png";
import "../sass/Cart.scss";
import { cartCountSelector, clearCart } from "../features/cartCount/cartCountSlice";
import { useDispatch, useSelector } from "react-redux";
import { cartItems } from "../resources/CartItems";

export default function Cart({showCart}) {
    const [dialogueVisibility, setDialogueVisibility] = useState(false)
    const cartCoutFromReducer = useSelector(cartCountSelector)
    const dispatch = useDispatch()
    
    function checkDialogueVisibility() {
        if(dialogueVisibility===true){
            setDialogueVisibility(false)
        }else if(dialogueVisibility===false) {
            setDialogueVisibility(true)
        }
    }

    function showItems(){
        const itemsList = [];
        for(let item in cartItems){
            itemsList.push(<li>{`${item.title}`}</li>);
        }
        return itemsList;
    }

    return (
        <div style={{position: 'relative'}}>
            <div className="cart" onMouseOver={() => setDialogueVisibility(true)} onMouseLeave={() => setDialogueVisibility(false)}>
                <img src={ShoppingBag}/>
                <span className="cart-count-container">{cartCoutFromReducer}</span>
            </div>
            <div>
                {
                    showCart && 
                        <div className="dialogue" onMouseOver={() => setDialogueVisibility(true)} onMouseLeave={() => setDialogueVisibility(false)}>
                            { cartCoutFromReducer!==0 ? (
                                <div>
                                    <div className="dialogue-body">
                                        { showItems() }
                                    </div>
                                    <div className="dialogue-footer">
                                        <button onClick={() => {
                                            dispatch(clearCart())
                                            setDialogueVisibility(false)    
                                        }}>Clear Cart</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="empty-cart">
                                    <span>Cart is Empty</span>
                                </div>
                            )}
                            
                        </div>
                    
                }
            </div>
        </div>
        
    )
}