import { configureStore } from '@reduxjs/toolkit'
import cartCountReducer from './features/cartCount/cartCountSlice'

export default configureStore({
    reducer: {
        cartCount: cartCountReducer,
    }
})