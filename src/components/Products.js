import React from "react";
import ProductItem from "./ProductItem";
import {AiFillCloseCircle} from 'react-icons/ai'

const Products =({products,sort, addItemToCart,removeProduct,getMoreDetails,sortProductsByPrice})=>{

    console.log("what is products="+products);
    return (
        <div>
             <div style={{marginTop: '5rem',marginLeft:'85%'}}>
            <button  onClick={sortProductsByPrice} className="btn btn-dark" id ="sortButton"> 
                {sort? <AiFillCloseCircle color="red"/> : "Sort By Price"}
            </button>
            </div>
        
        <div style={styles.productsContainer}>
            {products.map((product) => (
            
            <ProductItem
            product={product}
            productID={product.id}
            productImage={product.image}
            productName={product.name}
            productPrice={product.price}
            productRating={product.rating}
            addItemToCart={addItemToCart}
            removeProduct={removeProduct}
            getMoreDetails={getMoreDetails}
            // onDecreaseQuantity={props.onDecreaseQuantity}
            // onDeleteProduct={props.onDeleteProduct}
            />
            ))}
        </div>
        </div>
    )
}

export default Products;
const styles={
    productsContainer:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        // margin:'4rem'
    }
}