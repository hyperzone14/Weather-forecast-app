import { useSelector } from 'react-redux';
import { RootState } from '../utils/storage';
import SearchInput from './Searching/SearchInput';
import SearchButton from './Searching/SearchButton';
import OptionsList from './Searching/OptionList';
import { useForecast } from '../utils/useForecast';

const SearchElement = (): JSX.Element => {
  // const {
  //   location,
  //   options,
  //   city,
  //   forecast,
  //   onSubmit,
  //   onOptionSelect,
  //   onInputChange,
  // } = useForecast();
  const { location, options } = useSelector(
    (state: RootState) => state.weather
  );
  const { onSubmit, onOptionSelect, onInputChange } = useForecast();
  return (
    <div className='relative p-4 flex flex-col'>
      <div className='flex'>
        <SearchButton onSubmit={onSubmit} />
        <SearchInput
          location={location}
          onInputChange={onInputChange}
        />
      </div>
      <OptionsList
        options={options}
        onOptionSelect={onOptionSelect}
      />
    </div>
  );
};

export default SearchElement;
