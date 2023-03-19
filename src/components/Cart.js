import { useEffect, useState } from "react";
import ShoppingBag from "../images/shopping-bag.png";
import "../sass/Cart.scss";

export default function Cart({cartCount, clearCart}) {
    const [dialogueVisibility, setDialogueVisibility] = useState(false)

    

    function checkDialogueVisibility() {
        if(dialogueVisibility===true){
            setDialogueVisibility(false)
        }else if(dialogueVisibility===false) {
            setDialogueVisibility(true)
        }
    }

    function showItems(){
        const itemsList = [];
        for(let i=0;i<cartCount;i++){
            itemsList.push(<li>{`Item ${i+1}`}</li>);
        }
        return itemsList;
    }

    return (
        <div style={{position: 'relative'}}>
            <div className="cart" onClick={() => checkDialogueVisibility()}>
                <img src={ShoppingBag}/>
                <span className="cart-count-container">{cartCount}</span>
            </div>
            <div>
                {
                    dialogueVisibility && 
                        <div className="dialogue">
                            { cartCount!==0 ? (
                                <div>
                                    <div className="dialogue-body">
                                        { showItems() }
                                    </div>
                                    <div className="dialogue-footer">
                                        <button onClick={() => clearCart(true)}>Clear Cart</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <span>Cart is Empty</span>
                                </div>
                            )}
                            
                        </div>
                    
                }
            </div>
        </div>
        
    )
}