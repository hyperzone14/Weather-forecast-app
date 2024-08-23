import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchButtonProps {
  onSubmit: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onSubmit }) => {
  return (
    <button className="mt-1 focus:outline-none rounded-full" onClick={onSubmit}>
      <FaSearch size={19} color="#000" className="w-7" />
    </button>
  );
};

export default SearchButton;
