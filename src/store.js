import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './redux/index'
export default configureStore({
    reducer:{
        counter:counterReducer
    }
});