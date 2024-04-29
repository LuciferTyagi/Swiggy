import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utlis/cartSlice";
const Cart = () => {

    //Now we have to read the items so we have to subscribe the store
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            
            <h1 className="text-2xl font-bold">Cart</h1>

            <div className="m-auto w-6/12">
                <button className="p-2 m-2 bg-black text-green-300 rounded-lg"
                onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1>Cart is empty 🪹Add items to cart</h1>}
                <ItemList items={cartItems} isInCartPage={true}>
                    
                </ItemList>
            </div>
        </div>
    )
}


export default Cart;