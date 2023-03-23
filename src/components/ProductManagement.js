import { useEffect, useState } from 'react'
import '../sass/ProductManagement.scss'
import {getAllProducts} from '../services/getProducts'
import Loading from './Loading';
import ProductTile from './ProductTile';

export default function ProductManagement({productSelected}){
    const [products, setProducts] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);

    useEffect(() => {
        // let mounted = true;
        function getData(){
            
            // if(mounted){
                setTimeout(async () => {
                    const prods = await getAllProducts();
                    setProducts(prods)
                    setLoadingStatus(false);
                }, 1000)
                
            // }
        }
        getData();
        // return ()=>{
        //     mounted = false;
        // }
    }, [])

    return (
            

        <div className="product-list">
            {loadingStatus && <Loading /> }
            <div className='product-list-body'>
                { 
                    products?.map((product) => (
                        <ProductTile product={product}>{product.title}</ProductTile>
                    ))
                }
            </div>
            
            <button onClick={() => productSelected()}>+</button>
        </div>
        
    )
}