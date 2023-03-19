export default function ProductManagement({productSelected}){
    return (
        <div>
            <button onClick={() => productSelected()}>+</button>
        </div>
    )
}