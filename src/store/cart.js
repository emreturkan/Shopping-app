import { createSlice } from "@reduxjs/toolkit";


const initialState={
    items:[],
    amount:0,
    total:0
}

const cart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state,action)=>{
             state.items = state.items.concat(action.payload)
             
        },
        totalPrice:(state)=>{
            state.total = state.items.reduce((tot,item)=>(tot+=item.price),0)
        }
        
    }
})

export const {addCart,totalPrice} = cart.actions
export default cart.reducer