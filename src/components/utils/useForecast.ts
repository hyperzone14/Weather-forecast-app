import { ChangeEvent, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../utils/storage';
import { setLocation, setOptions, setCity, setForecast, setTempUnit } from '../utils/weatherSlice';
import { optionType, tempUnit } from '../utils/optionSelect';

const useForecast = () => {
  const dispatch = useDispatch<AppDispatch>();
  const city = useSelector((state: RootState) => state.weather.city);
  const unit = useSelector((state: RootState) => state.weather.tempUnit);

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=16&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          dispatch(setOptions(data));
        } else {
          dispatch(setOptions([]));
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        dispatch(setOptions([]));
      });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setLocation(value));

    if (value === '') return;

    getSearchOptions(value);
  };

  const getForecast = useCallback((city: optionType) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=${unit}&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          timezone: data.city.timezone,
          list: data.list.slice(0, 7),
        };
        dispatch(setForecast(forecastData));
        console.log(forecastData);
      });
  }, [unit, dispatch]);

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  const onOptionSelect = (option: optionType) => {
    dispatch(setCity(option));
  };

  const setUnit = (newUnit: tempUnit) => {
    dispatch(setTempUnit(newUnit));
  };

  useEffect(() => {
    if (city) {
      dispatch(setLocation(city.name));
      dispatch(setOptions([]));
      getForecast(city); // Fetch forecast whenever the city or unit changes
    }
  }, [city, getForecast, dispatch]);
  return { onSubmit, onOptionSelect, onInputChange, unit, setUnit };
};

export { useForecast };
