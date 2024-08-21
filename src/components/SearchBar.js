import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useTriggerOutsideClick from "../utils/useTriggerOutsideClick";

const SearchBar = ({
  setShowSearchBar,
  showSearchBar,
  setSearchQuery,
  searchSuggestions,
}) => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  useTriggerOutsideClick(wrapperRef, () => {
    setIsSearchBoxOpen(false);
  });

  useEffect(() => {
    if (isListening) {
      const recognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!recognition) {
        console.error("SpeechRecognition is not supported");
        return;
      }

      const recognitionInstance = new recognition();
      recognitionInstance.lang = "en-US";
      recognitionInstance.interimResults = false;
      recognitionInstance.maxAlternatives = 1;

      recognitionInstance.onresult = (event) => {
        const result = event.results[0][0].transcript;
        setQuery(result); // Update the query state with spoken text
        setSearchQuery(result);
        setIsListening(false); // Stop listening after getting the result
        setIsSearchBoxOpen(true); // Open the search box to show results
      };

      recognitionInstance.onerror = (event) => {
        console.error("SpeechRecognition error", event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.start();

      return () => recognitionInstance.abort(); // Cleanup
    }
  }, [isListening, setSearchQuery, setQuery]);

  return (
    <div className="my-2 relative">
      <div className="flex items-center shadow-lg md:shadow-none">
        <BiArrowBack
          className="ml-1 md:hidden"
          onClick={() => setShowSearchBar(!showSearchBar)}
        />
        <input
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              navigate(`results/?search_query=${e.target.value}`);
            }
          }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchBoxOpen(true);
            setQuery(e.target.value);
          }}
          onFocus={() => {
            setIsSearchBoxOpen(true);
          }}
          value={query}
          placeholder="Search"
          className="bg-gray-100 outline-blue-400 rounded-full p-1 m-1 w-full md:p-2 md:bg-white md:border-2 md:rounded-r-none md:mr-0 md:w-[35rem]"
        />
        <button className="hidden md:bg-gray-100 md:block p-[0.61rem] text-xl m-0 rounded-full rounded-l-none border-2 border-l-0">
          <CiSearch />
        </button>
        <button
          className="text-xl ml-2"
          onClick={() => setIsListening(true)}
          aria-label="Voice search"
        >
          <FaMicrophone />
        </button>
      </div>
      {isSearchBoxOpen && searchSuggestions.length > 0 && (
        <div
          ref={wrapperRef}
          className="border-2 rounded-xl py-2 w-[35rem] border-gray-100 absolute bg-white font-medium shadow-sm z-50"
        >
          <ul>
            {searchSuggestions.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  setIsSearchBoxOpen(false);
                  setQuery(item);
                }}
              >
                <Link
                  className="flex px-5 py-1 gap-2 items-center hover:bg-gray-100"
                  to={`results/?search_query=${item}`}
                >
                  <AiOutlineSearch /> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
