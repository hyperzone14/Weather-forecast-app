import React from "react";
import { optionType } from "../../utils/optionSelect";

interface OptionsListProps {
  // create a hook for the OptionList
  options: optionType[]; // Array of optionType objects representing the options to display
  onOptionSelect: (option: optionType) => void; // Function to handle when an option is selected
}

// Functional component for rendering a list of options
const OptionsList: React.FC<OptionsListProps> = ({
  options,
  onOptionSelect,
}) => {
  return (
    <ul className="absolute top-14 left-14 bg-[#f5f5f5] ml-1 rounded-b-md">
      {options.length > 0 ? (
        options.map((option, index) => (
          <li key={option.name + "-" + index}>
            <button
              className="text-left text-sm hover:bg-zinc-400 hover:text-white px-2 py-1 cursor-pointer w-full"
              onClick={() => onOptionSelect(option)}
            >
              {option.name}, {option.country}
            </button>
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};

export default OptionsList;
