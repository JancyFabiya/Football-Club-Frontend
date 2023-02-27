import { configureStore, } from '@reduxjs/toolkit';
import adminReducer from '../slices/adminSlices';
import userReducer from '../slices/userSlices';




const store = configureStore({
    reducer: {
        admin: adminReducer,
        user: userReducer
    },
})

export default store;