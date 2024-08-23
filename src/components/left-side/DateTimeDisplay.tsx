import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/storage';
import useDateTime from '../utils/time';

const formatTimezoneOffset = (timezone: number) => {
  const offsetInHours = timezone / 3600;
  const sign = offsetInHours >= 0 ? '+' : '-';
  const hours = Math.abs(Math.floor(offsetInHours));
  return `${sign}${hours}`;
};

const DateTimeDisplay: React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);

  const dateTime = useDateTime(forecast, 'timezone');
  console.log(forecast?.timezone);
  if (!forecast) return null;
  return (
    <div className='mt-5 flex'>
      <p className='text-2xl'>{dateTime.day}</p>
      <p className='text-2xl text-gray-400'>
        , {dateTime.time}
        {', '}
      </p>
      <p className='text-2xl text-gray-400'>
        {formatTimezoneOffset(forecast.timezone)}
      </p>
    </div>
  );
};

export default DateTimeDisplay;
