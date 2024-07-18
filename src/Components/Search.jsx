// src/Components/Search.js
import React from 'react';

// Functional component Search
const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      {/* Label for the search input */}
      <label htmlFor="searchInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search</label>
      
      {/* Input field for searching */}
      <input
        type="text"
        id="searchInput"
        value={searchTerm}            // Controlled input value based on searchTerm prop
        onChange={handleSearch}       // Event handler for input change
        placeholder="Search for bookmarks by ID, title, URL, or description..." // Placeholder text
        className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" // CSS classes for styling
      />
    </div>
  );
};

export default Search;  // Export Search component
