import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        auth: AuthSlice
    },
});

export default store;