import React from 'react';
import { useSelector  } from 'react-redux'; 
import AddProduct from './AddProduct';
// import Popup from 'reactjs-popup';
const Navbar = ({addProduct, pageDisplay}) => {
  
  const totalNoItemsCart = useSelector(state => state.counter.totalNoItemsCart)
  return (
    // <div>
    //   <ul class="nav nav-tabs" style={styles.nav}>
    //   <li class="nav-item">
    //     <a class="nav-link active">Active</a>
    //   </li>
    //   <li class="nav-item">
    //     <a class="nav-link" >Link</a>
    //   </li>
    //   <li class="nav-item">
    //     <a class="nav-link" >Link</a>
    //   </li>
    //   </ul>
    // </div>
     <div style={styles.nav}>
      <div  style={{cursor:'pointer'}}>
        <h4 onClick={()=> pageDisplay('product')} className="active">Products</h4>
      </div>
      <div  style={{cursor:'pointer'}}>
        <h4 onClick={()=> pageDisplay('cart')}>Cart</h4>
      </div> 
      <div >
        <AddProduct addProduct={addProduct} />
      </div>
      <div style={styles.cartIconContainer}>
        
        <img  style={{ height: 110, width: 112, objectFit: 'cover', borderRadius: 5, background: '#ccc' }}
        src="https://as2.ftcdn.net/v2/jpg/00/97/00/05/1000_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg" style={styles.cartIcon} />
        <span style={styles.cartCount}>{totalNoItemsCart}</span>
      </div> 
    </div>
  );
}

const styles = {
  nav: {
    height: '4rem',
    background:  '#4267b2',
    display: 'flex',
    flexDirection: 'row',
    marginRight:4,
    marginLeft:4,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '1100'
  },
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount:  {
    background: 'yellow',
    borderRadius: '50%',
    padding:  '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};

export default Navbar;