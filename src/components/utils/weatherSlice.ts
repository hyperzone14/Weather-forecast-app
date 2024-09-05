import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { forecastType, optionType, weatherState, tempUnit } from './optionSelect';

// Define a default forecast object to initialize the forecast state
const defaultForecast: forecastType = {
    name: '',
    country: '',
    sunrise: 0,
    sunset: 0,
    timezone: 0,
    visibility: 0,
    list: [{
        dt: 0, //date time
        main: {
            temp: 0,
            feels_like: 0,
            pressure: 0,
            humidity: 0,
            temp_min: 0,
            temp_max: 0,
        },
        weather: [{
            main: "",
            description: "",
            icon: "",
        }],
        wind: {
            speed: 0,
            deg: 0,
            gust: 0,
        },
        clouds: {
            all: 0,
        },
        visibility: 0,
        rain: [{
            "1h": 0
        }],
        pop: 0,
    }]
}

// Initialize the weather state with default values
const initialState: weatherState = {
    location: '',
    options: [],
    city: null,
    forecast: defaultForecast,
    tempUnit: 'metric'
}

// Create the weather slice with action reducers to handle state updates
const weatherSlide = createSlice({
    name: 'weather',
    initialState, // Initial state of the weather
    reducers: {
        // Action to set the location based on user input
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload; // Update the location string in the state
        },
        // Action to set the available options for locations
        setOptions: (state, action: PayloadAction<optionType[]>) => {
            state.options = action.payload;
        },
        // Action to set the selected city details
        setCity: (state, action: PayloadAction<optionType>) => {
            state.city = action.payload;
        },
        // Action to set the weather forecast for the selected city
        setForecast: (state, action: PayloadAction<forecastType>) => {
            state.forecast = action.payload;
        },
        // Action to set the temperature unit (metric or imperial)
        setTempUnit: (state, action: PayloadAction<tempUnit>) => {
            state.tempUnit = action.payload;
        }
    }
})


// Export the actions so they can be dispatched from components
export const { setLocation, setOptions, setCity, setForecast, setTempUnit } = weatherSlide.actions;

// Export the reducer to include it in the Redux store
export default weatherSlide.reducer;