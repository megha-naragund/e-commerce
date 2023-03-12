import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        totalNoItemsCart:0,
        cart: [
         
        ]
    },
    reducers: {
      increaseQty: (state, action) => {
        // state.cart.push(action.payload);
        let cartArr = [ ...state.cart ];
        console.log("state from increase function ",cartArr);
        let cartArr1 = action.payload;
        // cartArr1.quantity=cartArr1.quantity+1;
        const item = state.cart.find((item) => item.id === action.payload.id);
        
        item.quantity++;
        state.totalNoItemsCart++;
        // console.log("state from increase function ",cartArr1);
        // console.log("state from increase function ",cartArr);
        // return{
        //   ...state,
        //   cart: [cartArr1]
        // }
      },
      decreaseQty: (state,action) => {
        // state.value -= 1
        let cartArr = [ ...state.cart ];
        console.log("state from increase function ",cartArr);
        let cartArr1 = action.payload;
        // cartArr1.quantity=cartArr1.quantity+1;
        const item = state.cart.find((item) => item.id === action.payload.id);
        if(item.quantity > 0){
          item.quantity--;
          state.totalNoItemsCart--;
        }
        if(item.quantity === 0){
          state.cart = state.cart.filter((item)=>{
            if(item.id !== action.payload.id){
              return item;
            }
          })
        }
        
        // console.log("state from increase function ",cartArr1);
        // console.log("state from increase function ",cartArr);
      },
      addToCart: (state, action) => {
        // state.cart.push(action.payload); 
        let presentInCart = false;
        let cartArr = [ ...state.cart ];
        console.log("add to cart arr=",cartArr);
        let noItems = state.totalNoItemsCart;

        console.log(noItems+" total")
        
        const product =  action.payload;
        // console.log(JSON.stringify(product)+" whats inside product")
        let found=false;
        found = state.cart.find((item)=>{
          if(item.id=== product.id){
            console.log("id found!!!!!!!!!")
            item.quantity++;
            state.totalNoItemsCart=state.totalNoItemsCart+1;
            return true;
          }
        })
        console.log(found+"array found or not");
        if(found === undefined){
          state.cart.push(product);
          state.totalNoItemsCart=state.totalNoItemsCart+product.quantity;
        }
        
        // // cartArr.push(product)
        
        // console.log(product.quantity+"from reducer");
        // // state.cart[product.id] = product;
        // let modifiedProduct = cartArr.map((cartItem)=>{
        //   console.log("inside for each", cartItem);
          
        //   if(cartItem.id === product.id ){
        //     cartItem.quantity = cartItem.quantity +1;
        //     // presentInCart = true;
        //     return cartItem;
        //   }
        // })
        // if(!presentInCart){
        //   cartArr.push(product);
        // }
        // else{
        //   // cartArr.push(modifiedProduct);
        //   cartArr.push(modifiedProduct);
        // }
        // console.log(JSON.stringify(modifiedProduct)+" after update")
        // // if(!presentInCart){
        //   // state.cart.push(product);
        // // }
        // console.log('carARr is ', cartArr);
        // return {
        //   ...state,
        //   // cart: [...cartArr],
        //   totalNoItemsCart: noItems
        // }
        
      },
      removeFromCart:(state,action)=>{
        console.log(action.payload+"=id");
        state.cart = state.cart.filter((item)=>{
          if(item.id !== action.payload.id){
            return item;
          }
          if(item.id === action.payload.id){
            state.totalNoItemsCart = state.totalNoItemsCart - item.quantity;
          }
        })
        
        
      },
      updateCart: (state,action) => {
        console.log("From Update cart reducer ="+JSON.stringify(action.payload));
        let found=false;
        found = state.cart.find((item)=>{
          if(item.id=== action.payload.id){
            item.name = action.payload.name;
            item.description = action.payload.description;
            item.rating = action.payload.rating;
            item.price = action.payload.price;
            return true;
          }
        })
      }
      
    }
    
  })
  
  // Action creators are generated for each case reducer function
  export const { increaseQty, decreaseQty, addToCart , removeFromCart,updateCart} = counterSlice.actions
  
export default counterSlice.reducer;


// export default function product(state=[], action){
//     if(action.type=== 'ADD_TO_CART'){
//         return action.product;
//     }
//     return state;
// }