// src/Components/SearchTable.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockBookmarks from '../MockData';
import Search from './Search';
import BookmarkTable from './BookmarkTable';

const SearchTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredBookmarks = mockBookmarks.filter(bookmark =>
    bookmark.id.toString().includes(searchTerm) ||
    bookmark.title.toLowerCase().includes(searchTerm) ||
    bookmark.url.toLowerCase().includes(searchTerm) ||
    bookmark.description.toLowerCase().includes(searchTerm)
  );

  const navigateToCreateBookmark = () => {
    navigate('/create-bookmark');
  };

  return (
    <div className="container mx-auto py-8">
      <div className="overflow-x-auto bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="p-4 flex justify-between items-center">
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
            onClick={navigateToCreateBookmark}
          >
            Add Bookmark
          </button>
        </div>
        <BookmarkTable bookmarks={filteredBookmarks} />
      </div>
    </div>
  );
};

export default SearchTable;
