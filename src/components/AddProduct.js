// App.js
import React, { useState } from 'react';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'

function AddProduct({addProduct}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [product, setProduct] = React.useState({
    id:"",
    name:"",
    image:"",
    description: "",
    price:"",
    rating:"",
    quantity:1
});
const handleNameChange=(e)=>{
  console.log(e.target.name+" on change name is displayed ")
  const term = e.target.name;
  // product.{e.target.name} = e.target.value;
  if(term === "name"){
    product.name = e.target.value;
  }
  else if(term === "image"){
    product.image = e.target.value;
  }
  else if(term === "description"){
    product.description = e.target.value;
  }
  else if(term === "price"){
    product.price = e.target.value;
  }
  else if(term === "rating"){
    product.rating = e.target.value;
  }
  // console.log(product.term+" from product state")
}

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose} style={{marginTop: "4rem"}}>

        <Modal.Header closeButton>
          <Modal.Title>Product Description</Modal.Title>
        </Modal.Header>

        {/* <Modal.Body> */}
        <form  onSubmit={(e)=> {e.preventDefault(); addProduct(product); }}>
                    {/* <section id="descriptionContainer"> */}
                    <Modal.Body>
                        <label for="name">Name of Product:</label><br/>
                        <input type="text" id="name" name="name" onChange={handleNameChange}  required /><br/>
                        <label for="image">Image of Product:</label><br/>
                        <input type="link" id="image" name="image"  onChange={handleNameChange} required /><br/>
                        <label for="description">Description of Product:</label><br/>
                        <input type="text" id="description" name="description" onChange={handleNameChange}   required /><br/>
                        <label for="price">Price:</label><br/>
                        <input type="number" id="price" name="price" onChange={handleNameChange}  required /><br/>
                        <label for="rating">Rating:</label><br/>
                        <input type="number" id="rating" name="rating" onChange={handleNameChange}  required /><br/> <br/>
                        </Modal.Body>
                        {/* <Button variant="primary" type='submit' onClick={handleClose}>AddProduct</Button> */}
            
        

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>Close</Button>
          {/* <Button variant="primary" onClick={handleClose}>Submit</Button> */}
          <Button variant="primary" type='submit' onClick={handleClose}>AddProduct</Button>

        </Modal.Footer>
        </form>
      </Modal>

    </div>
  );
}

export default AddProduct;


// import React from 'react';
// import Popup from 'reactjs-popup';


// const AddProduct= () => (
  
//   <Popup
//     trigger={<button className="button"> Open Modal </button>}
//     // modal
//     // nested
//   >
    
//     {close => (
      
//       <div style={styles.addProductContainer}>
//         <button className="close" onClick={close}>
//           &times;
//         </button>
//         <div style={{color:'white', textAlign:'center'}}> Add Product </div>
//         <div style={{color:'white'}}>
//           {' '}
//           <form  onSubmit={(e)=> {e.preventDefault(); }}>
//                     {/* <section id="descriptionContainer"> */}
//                         <label for="name">Name of Product:</label><br/>
//                         <input type="text" id="name" name="name"  required /><br/>
//                         <label for="image">Image of Product:</label><br/>
//                         <input type="link" id="image" name="name"  required /><br/>
//                         <label for="description">Description of Product:</label><br/>
//                         <input type="text" id="description" name="name"  required /><br/>
//                         <label for="price">Price:</label><br/>
//                         <input type="number" id="price" name="name" required /><br/>
//                         <label for="rating">Rating:</label><br/>
//                         <input type="number" id="rating" name="name"  required /><br/>

//                         <button type='submit'> AddProduct </button>
//             </form>
          
//         </div>
//         <div className="actions">
//           {/* <Popup
//             trigger={<button className="button"> AddProduct </button>}
//             // position="top center"
//             // nested
//           > */}
//             {/* <span>  
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//               magni omnis delectus nemo, maxime molestiae dolorem numquam
//               mollitia, voluptate ea, accusamus excepturi deleniti ratione
//               sapiente! Laudantium, aperiam doloribus. Odit, aut.
//             </span>
//           </Popup> */}
//           <button
//             className="button"
//             onClick={() => {
//               console.log(' closed ');
//               close();
//             }}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     )}
//   </Popup>
// );
// export default AddProduct;


const styles={
    addProductContainer:{
        backgroundColor:'black',
        // color:'white',
        width: '60%',
        // float:'center'
        top:0,
        bottom:0,
        marginLeft:'25%',
        height: '40rem',
        width:'35rem'
    }
}