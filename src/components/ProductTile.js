import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../sass/ProductTile.scss"

export default function ProductTile({product}) {
    const navigate = useNavigate();

    function navigateToProductDetailPage() {
        navigate(`/product-detail/${product.id}`)
    }

    return (
        <div className="product-tile" onClick={navigateToProductDetailPage}>
            <img style={{width: "100px", height: "100px"}} src={product.images[0]} />
            <div>
                <span>{product.title}</span>
                <span>{product.price}</span>
            </div>
        </div>
    )
}