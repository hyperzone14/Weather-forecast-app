import { ChangeEvent, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../utils/storage';
import { setLocation, setOptions, setCity, setForecast, setTempUnit } from '../utils/weatherSlice';
import { optionType, tempUnit } from '../utils/optionSelect';

const useForecast = () => {
  const dispatch = useDispatch<AppDispatch>(); // Get the dispatch function with correct type
  const city = useSelector((state: RootState) => state.weather.city);  // Access the selected city from the state
  const unit = useSelector((state: RootState) => state.weather.tempUnit); // Access the current temperature unit from the state

  // Function to fetch search options (locations) based on user input
  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=16&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        if (Array.isArray(data)) {
          dispatch(setOptions(data)); // Dispatch action to set the options if data is an array
        } else {
          dispatch(setOptions([])); // If no valid data, set options as an empty array
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error); // Handle errors in the fetch request
        dispatch(setOptions([])); // Set options to an empty array if there's an error
      });
  };

  // Function to handle input changes in the search field
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setLocation(value)); // Update the location in the state

    if (value === '') return;

    getSearchOptions(value); // Fetch location options based on the input value
  };

  // Function to fetch the weather forecast for a selected city
  const getForecast = useCallback((city: optionType) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=${unit}&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city, // Get city data like name, timezone, etc.
          timezone: data.city.timezone,
          list: data.list.slice(0, 7), // Get a forecast for the first 7 time slots, which for the sliding cards
        };
        dispatch(setForecast(forecastData)); // Dispatch action to update the forecast in the state
        //console.log(forecastData);
      });
  }, [unit, dispatch]); // useCallback ensures that the function is only recreated when unit or dispatch changes

  // Function to submit the forecast request when a city is selected
  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  // Function to handle selecting an option (city)
  const onOptionSelect = (option: optionType) => {
    dispatch(setCity(option)); // Dispatch action to update the selected city
  };

  // Function to set the temperature unit (metric or imperial)
  const setUnit = (newUnit: tempUnit) => {
    dispatch(setTempUnit(newUnit)); // Dispatch action to update the temperature unit in the state
  };

  // useEffect to handle changes to the city or temperature unit
  useEffect(() => {
    if (city) {
      dispatch(setLocation(city.name)); // Update the location when the city changes
      dispatch(setOptions([])); // Clear the options once a city is selected
      getForecast(city); // Fetch forecast whenever the city or unit changes
    }
  }, [city, getForecast, dispatch]); // Re-run this effect when the city or getForecast function changes

  // Return the functions and state variables for use in the component
  return { onSubmit, onOptionSelect, onInputChange, unit, setUnit };
};

export { useForecast };
