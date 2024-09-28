import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

//Action
export const fetchDetailProduct = createAsyncThunk("fetchDetailProduct",async(id)=>{
    const response= await fetch(`http://localhost:4000/api/product/prod/${id}`);
    return response.json();
})

const productDetailsSlice = createSlice({
    name:"productDetails",
    initialState:{
        isLoading:false,
        details:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchDetailProduct.pending,(state,action)=>{
            state.isLoading=true;
        });

        builder.addCase(fetchDetailProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.details=action.payload;
        });
       
        builder.addCase(fetchDetailProduct.rejected,(state,action)=>{
            state.isLoading=true;
            state.isError=true;
        })
    }
});

export default productDetailsSlice.reducer;