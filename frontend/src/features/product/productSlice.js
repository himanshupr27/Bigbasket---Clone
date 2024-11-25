import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk("fetchProducts",async({keyword="",page=1})=>{
    const response= await fetch(`http://localhost:4000/api/product/getall?keyword=${keyword}&page=${page}`);
    return response.json();
})

const productSlice = createSlice({
    name:"produsts",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
        resultperPage:0,
        productCount:0,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.isLoading=true;
        });

        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.resultperPage=action.payload.resultPerPage;
            state.productCount=action.payload.productCount;
        });
       
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading=true;
            state.isError=true;
        })
    }
});

export default productSlice.reducer;
