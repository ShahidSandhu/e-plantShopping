import { configureStore } from '@reduxjs/toolkit';
import CartReducer  from './CartSlice';
// import { addItem , removeItem, updateQuantity } from './CartSlice';

 const store = configureStore({
    reducer: {
        cart: CartReducer,
    },
});
export default store