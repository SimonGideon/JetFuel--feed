import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFeeds = createAsyncThunk('feeds/getFeeds', async()=>{
    const response = await axios.get('https://www.plugco.in/public/take_home_sample_feed')
    return response.data
})

export const feedsSlice = createSlice({
    name: 'feeds',
    initialState: {
        data: [],
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFeeds.pending, (state, action) => {
            if(state.loading == 'idle'){
                state.loading = 'pending'
            }
        })

        builder.addCase(getFeeds.fulfilled, (state, action) => {
            if(state,loading === 'pending'){
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getFeeds.rejected, (state, action)=>{
            if(state.loading === 'pending'){
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    },
})

export default feedsSlice.reducer