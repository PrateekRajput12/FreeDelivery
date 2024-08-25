import { createSlice } from "@reduxjs/toolkit";

const cartSLice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0
        }
    }
})


export const {addItem,removeItem,clearCart}=cartSLice.actions
export default cartSLice.reducer