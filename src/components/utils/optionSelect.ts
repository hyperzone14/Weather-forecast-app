// Define the "optionType" which represents the structure for a location option
export type optionType = {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

// Define the "forecastType" which represents the structure for weather forecast data
export type forecastType = {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
    timezone: number;
    visibility: number;
    list: [{
        dt: number; //date time
        main: {
            temp: number;
            feels_like: number;
            pressure: number;
            humidity: number;
            temp_min: number;
            temp_max: number;
        };
        weather: [{
            main: string;
            description: string;
            icon: string;
        }];
        wind: {
            speed: number;
            deg: number;
            gust: number;
        }
        clouds: {
            all: number;
        }
        visibility: number;
        pop: number;
        rain: [{
            "1h"?: number
        }]
    }]
}

// Define "tempUnit" type which restricts temperature units to either 'metric' or 'imperial'
export type tempUnit = 'metric' | 'imperial'

// Define the "weatherState" interface to represent the state structure for weather data
export interface weatherState {
    location: string;
    options: optionType[];
    city: optionType | null;
    forecast: forecastType | null;
    tempUnit: tempUnit;
}