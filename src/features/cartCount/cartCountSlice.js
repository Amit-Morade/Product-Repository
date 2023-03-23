import { createSlice } from "@reduxjs/toolkit";

export const cartCountSlice = createSlice({
    name: 'cartCount',
    initialState: 0,
    reducers: {
        increment: function (state) {
            state = state+1;
            console.log("from dispatcher: " + state)
            return state;
        },
        
        clearCart: function (state) {
            state = 0;
            return state;
        }
    }
})

export const { increment, clearCart } = cartCountSlice.actions;

export const cartCountSelector = (state) => state.cartCount;

export default cartCountSlice.reducer;