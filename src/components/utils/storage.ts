import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";

// Create the Redux store and configure it with the weatherReducer
const store = configureStore({
    reducer: {
        weather: weatherReducer // Assign the weatherReducer to handle the "weather" slice of state
    }
})

// Define the RootState type which represents the overall state shape of the redux
export type RootState = ReturnType<typeof store.getState>;
// Define the AppDispatch type, which represents the dispatch function type used in the app
export type AppDispatch = typeof store.dispatch;
// Export the configured Redux store to be used in the app
export default store;