import { configureStore } from "@reduxjs/toolkit";
import feedsReducer from '../features/feeds/feedsSlice'

export default configureStore({
    reducer: {
        feeds: feedsReducer,
    },
})