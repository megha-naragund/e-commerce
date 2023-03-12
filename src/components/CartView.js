import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartView=({products,onIncreaseQty,onDecreaseQty, removeItemFromCart,pageDisplay})=>{
    const cart = useSelector((state) => state.counter.cart);
    console.log(" from cartView cart ="+cart.length)
    return(
        <div>
        { cart== 0 ? <div style={{marginTop: '5rem',marginLeft:'50%'}}>
            No Items in the Cart Yet!!!
            <div>

            <button className="btn btn-success" onClick={()=>{pageDisplay('product')}}> Start Shopping...!</button>
            </div>
            </div>:
            <div style={{marginTop:'5rem'}} >
            {products.map((product)=>(
                <CartItem 
                    productID={product.id}
                    productImage={product.image}
                    productName={product.name}
                    productDescription={product.description}
                    productPrice={product.price}
                    productRating={product.rating}
                    productQuantity={product.quantity}
                    onIncreaseQty={onIncreaseQty}
                    onDecreaseQty={onDecreaseQty}
                    removeItemFromCart={removeItemFromCart}
                />
            ))}
        </div>
        }
        
    </div>    
    );
}

export default CartView;