import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

interface AutoCompleteProps {
  apiUrl: "https://jsonplaceholder.typicode.com/todos";
}

interface DataItem {
  id: number;
  title: string;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ apiUrl }) => {
  let [inputValue, setInputValue] = useState('');
  let [filteredData, setFilteredData] = useState<DataItem[]>([]);
  let [showOptions, setShowOptions] = useState(false);
  let inputRef = useRef<HTMLInputElement>(null);

//   API call
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);


//   Hides the dropdown on click outside the box
  useEffect(() => {
    let handleOutsideClick = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


//   Checks if there is input in the input field and updates showOptions
  let handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setInputValue(value);
    setShowOptions(true);
  };


//   When an option is selected, updates inputValue
  let handleOptionClick = (value: string) => {
    setInputValue(value);
    setShowOptions(false);
  };


//   Highlights the matching part of the text within each option and performs a search for the inputValue, it wraps the matching part in a <span> element
  let highlightMatch = (text: string) => {
    let startIndex = text.toLowerCase().indexOf(inputValue.toLowerCase());
    if (startIndex === -1) {
      return text;
    }

    let endIndex = startIndex + inputValue.length;
    let beforeMatch = text.slice(0, startIndex);
    let match = text.slice(startIndex, endIndex);
    let afterMatch = text.slice(endIndex);

    return (
      <>
        {beforeMatch}
        <span className="match">{match}</span>
        {afterMatch}
      </>
    );
  };


//   Holds an arry of options, It returns an array of items that match the search
  let filteredOptions = filteredData.filter(item =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  

  return (
    <div className="autocomplete" ref={inputRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      {showOptions && filteredOptions.length > 0 && (
        <ul className="autocomplete-options">
          {filteredOptions.map(item => (
            <li key={item.id} onClick={() => handleOptionClick(item.title)}>
              {highlightMatch(item.title)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
