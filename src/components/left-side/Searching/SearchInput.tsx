import React, { ChangeEvent } from 'react';

interface SearchInputProps {
  location: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  location,
  onInputChange,
}) => {
  return (
    <input
      type='text'
      value={location}
      placeholder='Search for places...'
      className='ms-3 p-2 border rounded-lg xl:w-full lg:w-10/12'
      onChange={onInputChange}
    />
  );
};

export default SearchInput;
