import {useState,useEffect} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import axios from 'axios';
import { useSelector, useDispatch  } from 'react-redux';
import { increaseQty, addToCart, decreaseQty, removeFromCart, updateCart } from './redux/index'
// import AbstractModalHeader from 'react-bootstrap/esm/AbstractModalHeader';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartView from './components/CartView';
import ProductDetail from './components/ProductDetail';
<link rel="stylesheet" type="text/css" href="path/to/notifications.css"></link>

const apiUrl="https://my-json-server.typicode.com/megha-naragund/e-commerce-DB/cartItems/";

function App() {
  const dispatch = useDispatch();
  const [productPage,setProductPage] = useState(true);
  const [productDetailPage,setproductDetailPage] = useState(false);
  const [products,setProducts] = useState([]);
  const [productDetails,setProductDetails] = useState({});
  const [sort,setSort] = useState(false);
  const [sortedProducts,setSortedProducts]= useState();
  // const { cart } =useSelector((state)=> state.cart);
  const cart = useSelector(state => state.counter.cart)

  useEffect(() => {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setProducts(data));
    // setSortedProducts([...products].sort(function(a,b){return a.price-b.price;}));
  }, []);

  const createNotification = (type,message,title) => {
    // console.log("inside createNotification manager ", type+" "+message+" "+title);
      switch (type) {
        case "info":
          NotificationManager.info(message);
          // console.log("inside createNotification info ", type);
          break;
        case "success":
          // console.log("inside createNotification success ", type);
          NotificationManager.success(message, title,3000);
          break;
        case "warning":
          NotificationManager.warning(message, title, 3000);
          break;
        case "error":
          NotificationManager.error(message, title, 5000)
          break;
      }
    // };
  };
  // page selection
  const pageDisplay=(currentPage)=>{
    if(currentPage === 'cart'){
      setProductPage(false)
      setproductDetailPage(false)
    }
    else if(currentPage === 'product'){
      setProductPage(true)
    }
   
    // productPage = !productPage;c
    // console.log(productPage+"product page")
  }

  const addItemToCart = (id) => {
    console.log(id.productID);
    products.map((product)=>{
      if(product.id === id.productID){
        // console.log("addItemToCart called");
        dispatch(addToCart(product));
      }
    })
    createNotification('success', 'Added to Cart');
    // console.log("added Item To Cart"+ JSON.stringify(cart));
  }   

  // remove item from cart
  const removeItemFromCart = (id) => {
    // console.log(id.productID+" from removecart");
    dispatch(removeFromCart(id));
    createNotification('success', 'Removed from Cart');
    // console.log("added Item To Cart"+ JSON.stringify(cart));
  } 
  //  add button click handler add to cart view
   
    
  // increase quantity 
  const onIncreaseQty = (id) => {
    console.log(id.productID);
    // dispatch(increaseQty(id));
    products.map((product)=>{
      if(product.id === id.productID){
        // console.log("addItemToCart called");
        dispatch(increaseQty(product));
      }
    })
    // console.log("added Item To Cart"+ JSON.stringify(cart));
  }
  
  
// decrease quantity
function onDecreaseQty(id){
  // setCart(...cart,);
  console.log(id.productID);
    // dispatch(increaseQty(id));
    products.map((product)=>{
      if(product.id === id.productID){
        // console.log("addItemToCart called");
        dispatch(decreaseQty(product));
      }
    })
    console.log("added Item To Cart"+ JSON.stringify(cart));
}
  // console.log(products[1].id+" after update products");

// Edit product
async function editProduct (editedProduct,error){
  console.log("edited product ID edit product"+ JSON.stringify(editedProduct)+"                        "+error)
  if(error){
    createNotification('warning', 'Please enter valid input');
  }
  else{
    try{
      // let response = await axios.fetch(apiUrl+editedProduct.id);
      // console.log("edited product ID "+JSON.stringify(response.data));
      const prodArray = products.map((product)=>{
        if(product.id === editedProduct.id){
          dispatch(updateCart(editedProduct));
          return editedProduct;
        }
        return product;
      });
      setProducts(prodArray);
      setProductDetails({
        "product": {
          ...editedProduct
        }
      });
      // setProducts([response.data,...products]);
      console.log("PRODUCTS..." +JSON .stringify(prodArray));
      createNotification('success', 'Modified Product Details');
    }
    catch(error){
      console.log("Unable to find url "+error);
      setProducts(products.map((product)=>{
        if(product.id === editedProduct.id){
          dispatch(updateCart(editedProduct));
          return editedProduct;
        }
        return product;
      }));
      createNotification('success', 'Modified Product Details');
    }
  }
  
  
}

// add product
async function  addProduct (newProduct){
  console.log("add product triggered ="+ JSON.stringify(newProduct)+ " product length =" + products.length);
  newProduct.id= products[products.length-1].id +1 ;
  // console.log("add product triggered ="+ JSON.stringify(newProduct)+ " product length =" + products.length);
  try{
    // axios.put(apiUrl,{
    //   newProduct
    // })
    let response = await axios.post(apiUrl,newProduct );
    setProducts([response.data,...products]);
    // setSortedProducts([...products].sort(function(a,b){return a.price-b.price;}));
    // console.log(response.data);
    createNotification('success','Success!!', 'Added Product');
  }
  catch(error){
    // alert(error)
    createNotification('warning','Couldnot add product', 'Error');
  }
}


  // removing the product 
  async function  removeProduct(id){
    try{
      // const res = await axios.delete(apiUrl+`${id.productID}`);
      console.log("successful !!!!!!!!!!!!" + JSON.stringify(id))
      // 
      const result= products.filter((product) => {
        // console.log(product.id+" ")
        return product.id !== id;
     })
     setProducts(result);
     
     dispatch(removeFromCart({id}));
     setSortedProducts([...products].sort(function(a,b){return a.price-b.price;}));
    }catch(error){
      alert(error)
    }
    createNotification('success','Successfully removed Product', 'Removed Product');
  }
  //Product details page 
  const getMoreDetails = (product)=>{
    // console.log("clicked");
    setProductPage(false);
    setproductDetailPage(true);
    setProductDetails(product);
  }

  // navigate back to products page
  const goBackHandler =() =>{
    setProductPage(true);
    setproductDetailPage(false);
  }

  //  sort
  // var button;
  // useEffect(()=>{
  //    button = document.getElementById("sortButton");
  //     console.log("button= "+button.innerHTML);
  // })
  useEffect( ()=>{
    setSortedProducts([...products].sort(function(a,b){return a.price-b.price;}));
  },[products]);
  
  const sortProductsByPrice =() =>{
    setSort(!sort);
    // if(sort){
      // setSortedProducts([...products].sort(function(a,b){return a.price-b.price;}));
    // }
    // console.log("Products after sorting ="+sortedProducts);
  }
  return (
    
      <div className="App">
        <Navbar length={products.length} addProduct={addProduct} pageDisplay={pageDisplay} />
        {productPage ? 
          sort ?
          <Products products={sortedProducts} sort={sort} addItemToCart={addItemToCart} removeProduct={removeProduct} getMoreDetails={getMoreDetails} sortProductsByPrice={sortProductsByPrice} />
          :<Products products={products} sort={sort} addItemToCart={addItemToCart} removeProduct={removeProduct} getMoreDetails={getMoreDetails} sortProductsByPrice={sortProductsByPrice} pageDisplay={pageDisplay}/>
        : productDetailPage ? <ProductDetail productDetails={productDetails} goBackHandler={goBackHandler} removeProduct={removeProduct} editProduct ={editProduct} /> : <CartView products={cart} onIncreaseQty={onIncreaseQty} onDecreaseQty={onDecreaseQty} removeItemFromCart={removeItemFromCart} pageDisplay={pageDisplay}/> }
      
      <NotificationContainer />
      </div>
  );
}

export default App;
