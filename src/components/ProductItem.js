import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
// import boot
// const dispatch = useDispatch();
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
const ratingArr = [1,2,3,4,5];

const ProductItem =({product, productID,productImage, productName, productPrice, productRating, addItemToCart, removeProduct,getMoreDetails})=>{
    const rating =(productRating,item)=>{
            if(productRating.productRating < item){
                // console.log("inside if")
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
    return (
        <div >
            
            <div className = "card" style={{width:"11rem",  margin:'2rem'}}>
                <div >
                    <img
                       
                        style={{ height: '10rem', width: '10rem', margin:'0.5rem',  borderRadius: 5, background: '#ccc' }}
                        className="card-img-top"
                        src={productImage}
                        onClick={()=>(getMoreDetails({product}))}
                    />
                </div>
                <div class="card-body">
                    <h4 className="card-title text-lg-left"/*style={styles.productName}*/ >
                        {productName}
                    </h4>
                    <div>
                    {ratingArr.map((item)=>{
                        return (rating({productRating},item) )
                    })
                    }
                    </div>
                    <p className="card-text">Rs.{productPrice} </p>
                    
                {/* </div> */}
                <div /*style={styles.buttons}*/>
                    <div > Add To Cart <img
                            // className="btn"
                            style={{ height: 30, width: 30, borderRadius: 5, background: '#ccc', cursor:'pointer',borderRadius:10, }}
                            src="https://as1.ftcdn.net/v2/jpg/03/59/40/34/1000_F_359403494_bFUNC8BUgYEFyYjtgrEV4fRqHby56nIY.jpg"
                            onClick={()=>(addItemToCart({productID}))}
                             />
                    </div>
                    <div> Remove product <img
                        style={{ height: 20, width: 20, borderRadius: 5, background: '#ccc', cursor:'pointer',borderRadius:10, }}
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                        onClick={()=>(removeProduct(productID))}
                        /> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;

const styles = {
    productItemContainer:{
        display:'flex',
        flexDirection:'column',
        // flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        width:'10rem',
        height:'18rem',
        border: 'solid',
        margin:'2rem',
        borderRadius:10,
    },
    productName:{
        fontWeight:'bold',
        fontSize: 25,marginLeft:'0.5rem',
        marginRight:'0.5rem',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
    },
    productRating:{
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
    },
    productPrice:{
        // fontWeight:'bold'
        height:'1rem',
        width:'6rem',
        alignItems:'center',
        fontSize: 15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'0.5rem',
        marginRight:'0.5rem',
        // marginBottom:-21,
    },
    buttons:{
        
        display:'flex',
        flexDirection:'column',
        
    }
}