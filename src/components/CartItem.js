import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneStar } from "react-icons/ai";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
const ratingArr = [1,2,3,4,5];

// import { addToCart,increaseQty, decreaseQty } from '../redux/index'
const CartItem =({productID,productImage, productName, productDescription, productRating, productQuantity, productPrice, onIncreaseQty, onDecreaseQty, removeItemFromCart})=>{
    let id = productID;
    const rating =(productRating,item)=>{
        if(productRating.productRating < item){
            console.log("inside if")
            return(
                < AiTwotoneStar style={{color:"grey"}}/>
            )     
        }
        else{
            return(
                < AiTwotoneStar style={{color:"#4267b2"}}/>
            ) 
        }
    }
    console.log("product ID from cartItem cartItem component "+productID);
    const cart = useSelector((state) => state.counter.cart);
    // const dispatch = useDispatch();
    return(
        <div className="container" style={{width:'60%',height:'16rem', border:"solid", borderRadius:'1rem', marginTop:'1rem'}}>
            <div className="row">
                {/* <div className="col-sm-3" > */}
                    <img
                         style={{width:'15rem', height:'15rem', borderRadius:'20px'}}
                        src={productImage}
                    />
                {/* </div> */}
                 <div className="col-sm-3"  style={{marginTop:20}} >
                    <h2 /*style={{marginBottom:-15, display:'flex', flexDirection:'row', justifyContent:'space-between'}}*/> {productName}  
                    {/* </div> */}
                    </h2> 
                    <p> Rs.{productPrice} </p>
                    <p>
                    {ratingArr.map((item)=>{
                        return (rating({productRating},item) )
                    })
                    }
                    </p>
                    
                </div>
                 <div className="col-sm-4" style={{marginTop:20}}>
                <div className="row h-50 "> 
                    <div className="col align-self-center">
                        <p> {productDescription} </p> 
                    </div>
                </div>
                <div className="row ">
                    <div className="col ">
                        <img
                        style={styles.buttons} 
                        src="https://cdn-icons-png.flaticon.com/128/148/148764.png" alt="Add Quantity"
                        onClick={()=>{onIncreaseQty({productID})}}
                        />
                    </div>
                    <div className="col">
                        <h4  > {productQuantity} </h4>
                    </div>
                    <div className="col">
                        <img
                        style={styles.buttons} 
                        src="https://cdn-icons-png.flaticon.com/512/5974/5974627.png" alt="Reduce Quantity"
                        onClick={()=>{onDecreaseQty({productID})}}
                        /> 
                    </div>
                </div>
                <div className="row "> <button /*style={{position:'absolute',marginLeft:'11rem'} } */
                    onClick={()=>{removeItemFromCart({id})}}>Remove from Cart</button> 
                </div>
                
                
            </div>
           
                
            </div>
        </div>
    )
}
export default CartItem;

const styles={
    // cartItemContainer:{
    //     display:'flex',
    //     alignItems:'center',
    //     // flexDirection:'column',
    //     margin:'1rem',
    //     width:'30rem',
    //     height:'10rem',
    //     border:'solid',
    // },
    // cartDetails:{
    //     display:'flex',
    //     flexDirection:'column'
    // },
    // productQuantity:{
    //     marginTop:0,
    //     marginBottom:-15,
    //     display:'flex',
    //     flexDirection:'row',
    //     width:'90%',
    //     // border:'solid',
    //     height:'2rem',
    //     alignItems:'center',
    //     // justifyContent:'space-around'
    // },
    buttons:{
        height: '1rem',
         width: '1rem', 
         objectFit: 'cover', 
         marginRight:10,
         borderRadius: 5, 
         background: '#ccc',
         cursor:'pointer'
    }
}