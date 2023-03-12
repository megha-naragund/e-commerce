import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneStar, AiTwotoneDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
></link>;
const ratingArr = [1, 2, 3, 4, 5];
const stylegrey = {
    color: 'grey'
};

const styleblue = {
    color: "#4267b2"
};

// import { addToCart,increaseQty, decreaseQty } from '../redux/index'
const ProductDetail = ({
  productDetails,
  editProduct,
  goBackHandler,
  removeProduct,
}) => {
  const product = productDetails.product;
  console.log('productDetails os ', productDetails);
  const productID = product.id;
  const productImg = product.image;
  // const productID={productsID}
  // const productID = productDetails.id;
  const [editMode, setEditMode] = useState(false);
  const [editedProductDetails, setEditedProductDetails] = useState({
    id: product.id,
    name: "",
    image: productImg,
    description: "",
    price: "",
    rating: product.rating,
    quantity: product.quantity,
  });
  const elementsName = ["name", "price", "rating", "description"];
  const makeEditable = () => {
    setEditMode(true);
    elementsName.forEach((elementName) => {
      document.getElementById(elementName).contentEditable = true;
      console.log(
        document.getElementById(elementName).isContentEditable + " get?"
      );
    });
  };
  // save edited data
  const saveEditedData = () => {
    var error = false;
    elementsName.forEach((name)=>{
        if(name === "name"){
            editedProductDetails.name = document.getElementById("name").innerText;
            console.log(editedProductDetails.name+ " fter edit")
        }
        else if(name === "description"){
            editedProductDetails.description = document.getElementById("description").innerText;
            console.log(editedProductDetails.description+ " after edit")
        }
        else if(name === "rating"){
            // editedProductDetails.rating
            var strRating= document.getElementById("rating").innerHTML;
            if(strRating.match(/(\d+)/)[0] >5){
                error= true;
            }
            else{
                editedProductDetails.rating  = Number(strRating.match(/(\d+)/)[0]);
                console.log(editedProductDetails.rating+ " After edit " + JSON.stringify(editedProductDetails) )
            }

        }
        else if(name === "price"){
            var strPrice = document.getElementById("price").innerText.substring(3);
            // if(strPrice.match(/(\d+)/)[0])
            if(isNaN(strPrice)){
                error=true;
            }
            editedProductDetails.price = strPrice
            console.log(editedProductDetails.price+ " After edit")
        }
    })

    editProduct(editedProductDetails,error);
    setEditMode(false);
  };
//   const ratingStars = (product, item) => {
//     console.log("from product rating Stars " + JSON.stringify(product));
//     return (<><AiTwotoneStar style={{ color: product.rating < item ? "grey": "#4267b2" }}/></>);
//   };
  // const ratingRender= (product)=> {
  //     return (editMode ? <p id="rating"> Rating: {product.rating} </p>:
  //                 <p id="rating1">
  //                  {ratingArr.map((item)=>{
  //                     return (ratingStars(product,item) )
  //                 })
  //                 }

  //                  {/* Rating: {product.rating} */}
  //                 </p>)
  // }
  console.log("product ID from cartItem productDetails component " + productID);
  const cart = useSelector((state) => state.counter.cart);
  // const rating =product.rating;
  // const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "5rem" }}>
      <div>
        <button
          className="btn btn-dark"
          style={{ marginLeft: "10rem" }}
          onClick={goBackHandler}
        >
          Go Back
        </button>
      </div>

      <div
        className="container"
        style={{
          width: "25%",
          left: "50%",
          right: "50%",
          border: "solid",
          borderRadius: "5%",
          marginTop: "1rem",
        }}
      >
        {/* <div className="row"> */}
        <div className="col-sm-5">
          <img
            className="card-img-right"
            style={{
              height: "20rem",
              width: "20rem",
              position: "relative",
              left: "50%",
              right: "50%",
              translate: ("-15%", "-15%"),
              objectFit: "cover",
              borderRadius: 5,
              background: "#ccc",
              marginTop: "0.5rem",
            }}
            src={product.image}
          />
        </div>
        <div className="col" style={{ marginTop: 20 }}>
          <h2 id="name"> {product.name}</h2>
          <p id="price"> Rs.{product.price} </p>
          {/* <p id="rating"> Rating: {product.rating} </p> */}
          {/* Rating: ${product.rating} :  */}
          <div id ="rating" >
          {editMode?  `Rating: ${product.rating}`  : 
          (<>
          < AiTwotoneStar style= { product.rating < 1 ? stylegrey : styleblue} />
          < AiTwotoneStar style= { product.rating < 2 ? stylegrey : styleblue} />
          < AiTwotoneStar style= { product.rating < 3 ? stylegrey : styleblue} />
          < AiTwotoneStar style= { product.rating < 4 ? stylegrey : styleblue} />
          < AiTwotoneStar style= { product.rating < 5 ? stylegrey : styleblue} />
          </>)
          }
          </div>
          
          
        </div>
        <div className="col" style={{ marginTop: 20 }}>
          <div className="row h-50 ">
            <div className="col align-self-center">
              <p id="description"> {product.description} </p>
            </div>
          </div>
          <div className="row ">
            <div id="editButton" className="col ">
              {editMode ? (
                <button
                  className="btn"
                  onClick={() => {
                    setEditMode(false);
                  }}
                >
                  {" "}
                  Cancel{" "}
                </button>
              ) : (
                <BiPencil
                  color="green"
                  size={"2rem"}
                  onClick={() => {
                    makeEditable();
                  }}
                />
              )}
            </div>
            <div id="deleteButton" className="col">
              {editMode ? (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    saveEditedData();
                  }}
                >
                  Save
                </button>
              ) : (
                <AiTwotoneDelete
                  color="red"
                  size={"2rem"}
                  onClick={() => {
                    removeProduct(productID);
                    goBackHandler();
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};
export default ProductDetail;

const styles = {
  buttons: {
    height: "1rem",
    width: "1rem",
    objectFit: "cover",
    marginRight: 10,
    borderRadius: 5,
    background: "#ccc",
    cursor: "pointer",
  },
};
