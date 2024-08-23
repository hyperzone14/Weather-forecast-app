export type optionType = {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

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

export type tempUnit = 'metric' | 'imperial'


export interface weatherState {
    location: string;
    options: optionType[];
    city: optionType | null;
    forecast: forecastType | null;
    tempUnit: tempUnit;
}