import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { forecastType, optionType, weatherState, tempUnit } from './optionSelect';

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

const initialState: weatherState = {
    location: '',
    options: [],
    city: null,
    forecast: defaultForecast,
    tempUnit: 'metric'
}

const weatherSlide = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setOptions: (state, action: PayloadAction<optionType[]>) => {
            state.options = action.payload;
        },
        setCity: (state, action: PayloadAction<optionType>) => {
            state.city = action.payload;
        },
        setForecast: (state, action: PayloadAction<forecastType>) => {
            state.forecast = action.payload;
        },
        setTempUnit: (state, action: PayloadAction<tempUnit>) => {
            state.tempUnit = action.payload;
        }
    }
})

export const { setLocation, setOptions, setCity, setForecast, setTempUnit } = weatherSlide.actions;
export default weatherSlide.reducer;