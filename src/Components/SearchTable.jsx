// src/Components/SearchTable.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockBookmarks from '../MockData'; // Importing mock data
import Search from './Search'; // Importing Search component
import BookmarkTable from './BookmarkTable'; // Importing BookmarkTable component

const SearchTable = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtering bookmarks based on search term
  const filteredBookmarks = mockBookmarks.filter(bookmark =>
    bookmark.id.toString().includes(searchTerm) ||
    bookmark.title.toLowerCase().includes(searchTerm) ||
    bookmark.url.toLowerCase().includes(searchTerm) ||
    bookmark.description.toLowerCase().includes(searchTerm)
  );

  // Function to navigate to create bookmark page
  const navigateToCreateBookmark = () => {
    navigate('/create-bookmark');
  };

  return (
    <div className="container mx-auto py-8">
      <div className="overflow-x-auto bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="p-4 flex justify-between items-center">
          {/* Search component with props */}
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />

          {/* Button to add a new bookmark */}
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
            onClick={navigateToCreateBookmark}
          >
            Add Bookmark
          </button>
        </div>

        {/* Displaying the filtered bookmarks in a table */}
        <BookmarkTable bookmarks={filteredBookmarks} />
      </div>
    </div>
  );
};

export default SearchTable;
