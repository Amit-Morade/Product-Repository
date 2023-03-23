import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { cartItems } from "../resources/CartItems";
import Loading from "./Loading";

export default function ProductDetail() {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    let { id } = useParams();

    useEffect(() => {
        console.log('inside useeffect')
        if(id) {
            fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(prod => {
                setProduct(prod)
                console.log("data received")
                setIsLoading(false);
            });
        }
    }, [])

    function addItemToCart() {
        cartItems.push(product)
        console.log(cartItems)
    }

    return (
        <div style={{position: 'relative', top: '50px', padding: '0px 100px 0px 100px'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {isLoading && <Loading />}
            </div>
           
            {product && <div>
                {product.title}
                <button onClick={() => addItemToCart()}>Add this to Cart</button>
            </div> }
        </div>
    )
}